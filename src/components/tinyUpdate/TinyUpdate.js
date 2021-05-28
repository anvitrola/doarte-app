//hooks
import { useForm } from "react-hook-form";

//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";

//api services
import { deleteProduct, updateProduct } from "../../services/productServices";

//styled components
import { Form, DeleteButton } from "./TinyUpdate.styles";
import ModalTemplate from "../modal/Modal";

function TinyUpdate({ id }) {
  const { register, handleSubmit } = useForm();

  const handleDelete = () => {
    deleteProduct(id).then((response) => alert(response.message));
  };
  const handleUpdate = (data) => {
    updateProduct(data, id).then((response) => alert(response.message));
  };
  return (
    <>
      <Form metod={"PATCH"} onSubmit={handleSubmit(handleUpdate)}>
        <>
          <FormField
            text="Qual é o novo título da sua vaquinha?"
            name={"title"}
            type={"text"}
            register={register}
          />
          <FormField
            text="Descrição"
            name={"description"}
            type={"text"}
            register={register}
            required
          />
          <FormField
            text="Nova meta da vaquinha"
            name={"goal_value"}
            type={"number"}
            register={register}
          />
        </>
        <DefaultButton text={"Confirmar"} primary={true} type={"submit"} />
      </Form>
      
      <ModalTemplate isDelete={true} text={"deletar vaquinha"}>
        <h5>Você tem certeza?</h5>
        <DeleteButton type={"button"} onClick={handleDelete}>
          Deletar vaquinha
        </DeleteButton>
      </ModalTemplate>
    </>
  );
}

export default TinyUpdate;
