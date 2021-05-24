import HighlightButton from '../buttons/HighlightButton'
import {Form} from './UpdateForm.styles'
import {updateUser} from './../../services/userServices'
import {useState} from 'react'


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
    
      const takeValue = e =>{
        const {id,value} = e.target;
        setUser(prevState =>({
          ...prevState,
          [id]:value
        }))
        
      }
    return (
        <Form method="PATCH" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome </label>
            <input type="text" id="name" placeholder={"Ana Viana"} onBlur={takeValue}/>

            <label htmlFor="email">Email </label>
            <input type="email" id="email" placeholder={"ana@email.com"} onBlur={takeValue}/>

            <label htmlFor="password">Senha </label>
            <input type="password" id="password" placeholder={"*********"} onBlur={takeValue}/>

            <HighlightButton text={"Update infos"} type={"submit"}/>
        </Form>
    )
}

export default UpdateForm
