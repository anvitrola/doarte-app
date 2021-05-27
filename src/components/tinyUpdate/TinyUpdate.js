//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";

//styled components
import { Form, DeleteButton } from "./TinyUpdate.styles";

function TinyUpdate() {
  return (
    <Form method="PATCH">
      <FormField text="Qual é o novo título da sua vaquinha?" type={"text"} />
      <FormField text="Descrição" type={"text"} />
      <FormField text="Nova meta da vaquinha" type={"number"} />

      <DefaultButton text={"Confirmar"} primary={true} type={"submit"} />
      
      <DeleteButton>Deletar</DeleteButton>
    </Form>
  );
}

export default TinyUpdate;
