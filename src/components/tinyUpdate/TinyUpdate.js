//react
import { useRef } from "react";
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
  const formElement = useRef(null);

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = formElement.current;

    let data = {
      title: form["title"].value,
      goal_value: form["goal_value"].value,
      description: form["description"].value,
    };

    updateProduct(data, id).then((response) =>
      alert(response.message)
    );
  };

  const handleDelete = (event) => {
    event.preventDefault();

    deleteProduct(id).then((response) =>
      alert("Vaquinha deleteda com sucesso.")
    );
    
    useHistory.push("/explore");
  };

  return (
    <Form
      smaller={isDelete}
      metod={"PATCH"}
      onSubmit={isDelete ? handleDelete : handleUpdate}
      ref={formElement}
    >
      {!isDelete && (
        <>
          <FormField
            text="Qual é o novo título da sua vaquinha?"
            id={"title"}
            type={"text"}
          />
          <FormField text="Descrição" id={"description"} type={"text"} />
          <FormField
            text="Nova meta da vaquinha"
            id={"goal_value"}
            type={"number"}
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
