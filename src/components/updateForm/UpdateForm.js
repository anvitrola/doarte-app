import HighlightButton from '../buttons/HighlightButton'
import {Form} from './UpdateForm.styles'

function UpdateForm() {
    return (
        <Form method="PATCH">
            <label htmlFor="name">Nome </label>
            <input type="text" id="name" placeholder={"Ana Viana"}/>

            <label htmlFor="email">Email </label>
            <input type="email" id="email" placeholder={"ana@email.com"}/>

            <label htmlFor="password">Senha </label>
            <input type="password" id="password" placeholder={"*********"}/>

            <HighlightButton text={"Update infos"} type={"submit"}/>
        </Form>
    )
}

export default UpdateForm
