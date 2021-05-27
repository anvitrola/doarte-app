import { Label, Input } from "./FormField.styles";

function FormField({text, name, register, type, holder, required}) {
    console.log([name,register]);
    return (
        <>
            <Label htmlFor={name}>{text}</Label>
            <Input type={type} name={name} {...register(name,{required})}  placeholder={holder}/>
        </>
    )
}

export default FormField
