import { Link } from "react-router-dom";
import { Form, Container } from "./SignIn.styles";

function SignIn() {
  return (
    <Container>
      <Form>

        <img src={"Logo"} alt="DOARTE" />
        
        <input type="email" placeholder="Endereço de e-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
        <hr />

        <Link to="/signUp">Criar conta grátis</Link>
        
      </Form>
    </Container>
  );
}

export default SignIn;
