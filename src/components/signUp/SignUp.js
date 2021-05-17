import { Form, Container } from "./SignUp.styles";
import { Link } from "react-router-dom";


function SignUp() {
  return (
    <Container>
      <Form>
        <img src={"Logo"} alt="DOARTE" />
        <input type="text" placeholder="Nome de usuário" />
        <input type="email" placeholder="Endereço de e-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Cadastrar grátis</button>
        <hr />
        <Link to="/signIn">Fazer login</Link>
      </Form>
    </Container>
  );
}

export default SignUp;
