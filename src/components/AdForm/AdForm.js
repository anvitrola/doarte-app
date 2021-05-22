import { Link } from "react-router-dom";
import HighlightButton from "../buttons/HighlightButton";
import FormButton from "../buttons/ConnectButton";
import Logo from "../../images/logo-doarte.png";
import Github from "../../images/githubimg.png";
import Microsoft from "../../images/microsoftimg.png";
import Google from "../../images/googleimg.png";
import {Checkbox} from "../buttons/Checkbox"
import { Form, Container } from "./AdForm.styles";

function AdForm({ signUp }) {
  return (
    <Container>
      <Form method="POST">
        <img src={Logo} alt="DOARTE" />
        {signUp ? (
          <h4>Fazer Cadastro na Doarte</h4>
        ) : (
          <h4>Fazer Login na Doarte</h4>
        )}

        {signUp && <label type="text">Nome</label>}

        {signUp && <input type="text" />}
        <label htmlFor="id">E-mail</label>
        <input type="email" required />
        <label htmlFor="id">Senha</label>
        <input type="password" required />

        {signUp && (
          <Checkbox />
        )}

        {signUp ? (
          <HighlightButton type={"submit"} text={"Cadastrar"} />
        ) : (
          <HighlightButton type={"submit"} text={"Entrar"} />
        )}

        <h3>OU</h3>
        <div>
          <img className="icon" src={Google} />
          <FormButton type={"submit"} text={"Conectar com o Google"} />
        </div>

        <div>
          <img className="icon" src={Microsoft} />
          <FormButton type={"submit"} text={"Conectar com a Microsoft"} />
        </div>
        <div>
          <img className="icon" src={Github} />
          <FormButton type={"submit"} text={"Conectar com Github"} />
        </div>

        <hr />

        {signUp ? (
          <Link to="/signIn">Já tem conta? Entrar</Link>
        ) : (
          <Link to="/signUp">Criar conta</Link>
        )}

        {signUp ? (
          ""
        ) : (
          <Link type="text" placeholder="Nome completo">
            Recuper senha
          </Link>
        )}
      </Form>
    </Container>
  );
}

export default AdForm;
