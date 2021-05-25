import { Label, Input } from "./FormField.styles";

function FormField({text, type, getValue, holder}) {
    return (
        <>
            <Label htmlFor={text}>{text}</Label>
            <Input type={type} id={text} onBlur={getValue} placeholder={holder}/>
        </>
    )
}

export default FormField
