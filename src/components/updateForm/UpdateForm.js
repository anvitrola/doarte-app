import { useState } from "react";

//api services
import { updateUser } from "./../../services/userServices";

//components
import HighlightButton from "../buttons/HighlightButton";
import FormField from "../formField/FormField";

//styled components
import { Form } from "./UpdateForm.styles";

function UpdateForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUser(user);
  };

  const takeValue = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  return (
    <Form method="PATCH" onSubmit={handleSubmit}>

      <FormField text={"Nome"} type={"text"} getValue={takeValue} holder={"Name"}/>
      <FormField text={"Email"} type={"email"} getValue={takeValue} holder={"name@example.com"}/>
      <FormField text={"Senha"} type={"password"} getValue={takeValue} holder={"********"}/>

      <HighlightButton text={"Update my infos"} type={"submit"} />
    </Form>
  )
};

export default UpdateForm;
