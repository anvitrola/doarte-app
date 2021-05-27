//react
import { useContext, useRef } from "react";

//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";
import TextBox from "../textBox/TextBox";

//styled components
import { Form } from "./TinyForm.styles";

//authentication context
import { Context } from "../../contexts/AuthContext";

//services
import { deleteUser, donation } from "./../../services/userServices";
import { DeleteButton } from "../tinyUpdate/TinyUpdate.styles";

function TinyForm({ isDelete, id }) {
  const formElement = useRef(null);
  const { handleLogout } = useContext(Context);
  const handleDelete = (event) => {
    event.preventDefault();
    deleteUser();
    handleLogout();
  };
  const handleDonation = (event) => {
    event.preventDefault();

    const form = formElement.current;
    const value = {
      donation_value: Number(form["donation_value"].value),
    };
    donation(value, id).then((response) => alert(response));
  };
  return (
    <Form
      smaller={isDelete}
      metod={isDelete ? "PATCH" : "POST"}
      ref={formElement}
      onSubmit={isDelete ? handleDelete : handleDonation}
    >
      {!isDelete && (
        <FormField
          text="Qual valor você gostaria de doar para o projeto?"
          type={"number"}
          id={"donation_value"}
          holder={"Mínimo de 25 moedas"}
        />
      )}

      {isDelete && <TextBox subtitle={"Você tem certeza?"} />}

      <DefaultButton text={"Confirmar"} primary={true} type={"submit"} />
    </Form>
  );
}

export default TinyForm;
