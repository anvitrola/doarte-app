//hooks
import { useContext } from "react";
import { useForm } from "react-hook-form";

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

function TinyForm({ isDelete, id }) {
  const { register, handleSubmit } = useForm();

  const { handleLogout, handleUser } = useContext(Context);

  const handleDelete = () => {
    deleteUser();
    handleLogout();
  };

  const handleDonation = async (value) => {
    await donation(value, id);
    handleUser();
  };

  const onSubmit = (data) => {
    isDelete ? handleDelete() : handleDonation(data);
  };

  return (
    <Form
      smaller={isDelete}
      metod={isDelete ? "PATCH" : "POST"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {!isDelete && (
        <FormField
          text="Qual valor você gostaria de doar para o projeto?"
          type={"number"}
          register={register}
          name={"donation_value"}
          holder={"Mínimo de 25 moedas"}
          required
        />
      )}
      {!isDelete && <TextBox subtitle={`Você tem ${localStorage.getItem('amount_money')} moedas`} />}

      {isDelete && <TextBox subtitle={"Você tem certeza?"} />}

      <DefaultButton text={"Confirmar"} primary={true} type={"submit"} />
    </Form>
  );
}

export default TinyForm;
