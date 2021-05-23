import {useState} from "react";
import { Link } from "react-router-dom";
//components + services
import HighlightButton from "../buttons/HighlightButton";
import { createUser, loginUser } from "../../services/userServices";
//css and image
import Logo from "../../images/logo-doarte.png";
import { Form, Container } from "./AdForm.styles";


function AdForm({ signUp }) {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();

    signUp ? createUser(user) : loginUser(user);
  };

  const takeValue = e =>{
    const {id,value} = e.target;
    setUser(prevState =>({
      ...prevState,
      [id]:value
    }))
    
  }

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
        <img src={Logo} alt="DOARTE" />

        {signUp && (
          <input type="text" placeholder="Nome completo" id="name" onBlur={takeValue} required />
        )}

        <input type="email" placeholder="Endereço de e-mail" id="email" onBlur={takeValue} required/>
        <input type="password" placeholder="Senha" id="password" onBlur={takeValue} required />

        {signUp ? (
          <HighlightButton type={"submit"} text={"Cadastrar-me"} />
        ) : (
          <HighlightButton type={"submit"} text={"Entrar"} />
        )}

        <hr />

        {signUp ? (
          <Link to="/signIn">Fazer login</Link>
        ) : (
          <Link to="/signUp">Criar conta grátis</Link>
        )}
      </Form>
    </Container>
  );
}

export default AdForm;
