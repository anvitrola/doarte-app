//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";
import TextBox from "../textBox/TextBox";

//styled components
import { Form } from './TinyForm.styles';

function TinyForm({isDelete}) {
    return (
        <Form smaller={isDelete} metod={isDelete ? "PATCH" : "POST"}>
            {!isDelete && (
                <FormField 
                text="Qual valor você gostaria de doar para o projeto?"
                type={"number"}
                holder={"Mínimo de 25 moedas"}
                />
            )}

            {isDelete && (
                <TextBox
                subtitle={"Você tem certeza?"}
                />
            )}

            <DefaultButton 
            text={"Confirmar"} 
            primary={true} 
            type={"submit"}
            />
        </Form>
    )
}

export default TinyForm;
