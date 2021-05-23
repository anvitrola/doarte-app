import { Link } from "react-router-dom";
import HighlightButton from "../buttons/HighlightButton";
import Logo from "../../images/logo-doarte.png";
import { Form, Container } from "./AdForm.styles";
//import UserService from "../../services/userServices";

function AdForm({signUp}) {
  return (
    <Container>
      <Form method="POST">
        <img src={Logo} alt="DOARTE" />
        
        {signUp && (<input type="text" placeholder="Nome completo"/>)}

        <input type="email" placeholder="Endereço de e-mail" required />
        <input type="password" placeholder="Senha" required />

        {signUp 
          ? (<HighlightButton type={"submit"} text={"Cadastrar-me"}/>) 
          : (<HighlightButton type={"submit"} text={"Entrar"}/>)
        } 

        <hr/>

        {signUp 
          ? (<Link to="/signIn">Fazer login</Link>)
          : (<Link to="/signUp">Criar conta grátis</Link>) 
        } 
        
      </Form>
    </Container>
  );
}

export default AdForm;
