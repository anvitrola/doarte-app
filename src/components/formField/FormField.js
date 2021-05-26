import { Label, Input } from "./FormField.styles";

function FormField({text, id, type, getValue, holder}) {
    return (
        <>
            <Label htmlFor={id}>{text}</Label>
            <Input type={type} id={id} onBlur={getValue} placeholder={holder} required/>
        </>
    )
}

export default FormField
