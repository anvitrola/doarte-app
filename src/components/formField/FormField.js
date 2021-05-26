import { Label, Input } from "./FormField.styles";

function FormField({text, id, type, holder}) {
    return (
        <>
            <Label htmlFor={id}>{text}</Label>
            <Input type={type} id={id}  placeholder={holder}/>
        </>
    )
}

export default FormField
