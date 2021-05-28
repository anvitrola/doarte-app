//hooks
import { useForm } from "react-hook-form";

//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";
import TextBox from "../textBox/TextBox";

//api services
import { deleteProduct, updateProduct } from "../../services/productServices";

//styled components
import { Form, DeleteButton } from "./TinyUpdate.styles";
import { useHistory } from "react-router";
import ModalTemplate from '../modal/Modal';

function TinyUpdate({ isDelete, id }) {

  const { register, handleSubmit } = useForm();


  const handleUpdate = (data) => {

    updateProduct(data, id).then((response) =>
      alert(response.message)
    );
  };
  const handleDelete = () => {

    deleteProduct(id).then((response) =>
      alert("Vaquinha deleteda com sucesso.")
    );
    
    useHistory.push("/explore");
  };
  const onSubmit = (data) => {
    isDelete ? handleDelete() : handleUpdate(data);
  }
  return (
    <Form
      smaller={isDelete}
      metod={"PATCH"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {!isDelete && (
        <>
          <FormField
            text="Qual é o novo título da sua vaquinha?"
            name={"title"}
            type={"text"}
            register={register}
            required
          />
          <FormField text="Descrição" name={"description"} type={"text"} register={register} required />
          <FormField
            text="Nova meta da vaquinha"
            name={"goal_value"}
            type={"number"}
            register={register}
            required
          />
        </>
      )}

      {isDelete && <TextBox subtitle={"Você tem certeza?"} />}

      <DefaultButton text={"Confirmar"} primary={true} type={"submit"} />

      <ModalTemplate isDelete={true} text={"deletar vaquinha"}>
        <DeleteButton type={"submit"}>Deletar vaquinha</DeleteButton>
      </ModalTemplate>
    </Form>
  );
}

export default TinyUpdate;
