//react
import {useContext} from 'react'

//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";
import TextBox from "../textBox/TextBox";

//styled components
import { Form } from './TinyForm.styles';

//authentication context
import { Context } from "../../contexts/AuthContext";

//services
import { deleteUser } from './../../services/userServices';

function TinyForm({isDelete}) {
    const { handleLogout } = useContext(Context);
    const handleDelete = () =>{
        deleteUser();
        handleLogout();
    }
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
            clickEvent={handleDelete}
            />
        </Form>
    )
}

export default TinyForm;
