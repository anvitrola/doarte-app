//hooks
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

//api services
import { updateUser } from "./../../services/userServices";
import { createProduct } from "../../services/productServices";

//authentication context
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from "../buttons/HighlightButton";
import FormField from "../formField/FormField";

//styled components
import { Form } from "./PostAndPatch.styles";

function PostAndPatch({ isUpdate }) {
  const [err, setErr] = useState(false);

  const { handleUser } = useContext(Context);

  const { register, handleSubmit } = useForm();

  const handleUpdate = async (data) => {
    await updateUser(data);
    
    handleUser();
  
   
  }
  
  const onSubmit = (data) => {
    isUpdate?
    handleUpdate(data)
    :
    createProduct(data).then((response) => {
       if (response === undefined) {
        setErr(true);
        alert(err);
      } else {
        alert("Vaquinha criada com sucesso!");
      }
    });
    
  };

  return (
    <Form
      larger={isUpdate ? false : true}
      method={isUpdate ? "PATCH" : "POST"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        text={isUpdate ? "Nome" : "Dê um título à sua vaquinha"}
        register={register}
        name={isUpdate ? "name" : "title"}
        type={"text"}
        holder={isUpdate ? "Name" : "O título é o que chama a atenção!"}
        required={isUpdate? false : true}
      />

      <FormField
        text={isUpdate ? "Email" : "Descrição"}
        name={isUpdate ? "email" : "description"}
        type={isUpdate ? "email" : "text"}
        holder={
          isUpdate
            ? "name@example.com"
            : "Por que as pessoas devem se mobilizar por sua causa?"
        }
        register={register}
        required={isUpdate? false : true}
      />

      <FormField
        text={isUpdate ? "Senha" : "Quanto você deseja arrecadar?"}
        name={isUpdate ? "password" : "goal_value"}
        type={isUpdate ? "password" : "number"}
        holder={isUpdate && "********"}
        register={register}
        required={isUpdate? false : true}
      />

      {!isUpdate && (
        <FormField
          text={"Prazo final: "}
          name={"deadline"}
          register={register}
          type={"date"}
        />
      )}

      <HighlightButton
        text={isUpdate ? "Atualizar informações" : "Publicar vaquinha"}
        type={"submit"}
      />
    </Form>
  );
}

export default PostAndPatch;
