import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

//services to access api
import { createUser, loginUser } from "../../services/userServices";
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from "../buttons/HighlightButton";
import DefaultButton from "../buttons/DefaultButton";
import { Checkbox } from "../buttons/Checkbox";
import FormButton from "../buttons/ConnectButton";

//images
import Logo from "../../images/logo-doarte.png";
import Github from "../../images/githubimg.png";
import Microsoft from "../../images/microsoftimg.png";
import Google from "../../images/googleimg.png";

//styled components
import { Form, Container, SubmitButton, Logo, Fields } from "./AdForm.styles";

function AdForm({ signUp }) {
  const { handleAuth } = useContext(Context);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    signUp
      ? createUser(user)
      : loginUser(user).then(({ acessToken }) => handleAuth(acessToken));
=======

    signUp
    ? createUser(user)
    : loginUser(user)
      .then(({ acessToken }) => {
        handleAuth(acessToken);
      })
>>>>>>> f7d0ad0a7c4ef2b5f15515e96c4adec9b875eb48
  };

  const takeValue = (e) => {
    const { id, value } = e.target;

    setUser((prevState) => ({ ...prevState, [id]: value }));
<<<<<<< HEAD
=======

    console.log(user);
>>>>>>> f7d0ad0a7c4ef2b5f15515e96c4adec9b875eb48
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
<<<<<<< HEAD
        <img src={Logo} alt="DOARTE" />

        {signUp ? (
          <h4>Fazer Cadastro na Doarte</h4>
        ) : (
          <h4>Fazer Login na Doarte</h4>
        )}

        {signUp && <label type="text">Nome</label>}
        {signUp && <input type="text" onBlur={takeValue} required />}

        <label htmlFor="id">E-mail</label>
        <input type="email" onBlur={takeValue} required />
        <label htmlFor="id">Senha</label>
        <input type="password" onBlur={takeValue} required />
=======
        <Logo src={BrandLogo} alt="Logotimo do site Doarte. Um círculo composto por várias mãos"/>

        <Fields>

          {signUp && (
            <FormField text={"Nome"} type={"text"} getValue={takeValue} />
          )}

          <FormField text={"Email"} type={"email"} getValue={takeValue} />
          <FormField text={"Senha"} type={"password"} getValue={takeValue} />
>>>>>>> f7d0ad0a7c4ef2b5f15515e96c4adec9b875eb48

        {signUp && (
          <Checkbox
            className="checkbox"
            label={"Li e concordo com as Condições e Termos de Uso."}
          />
        )}

<<<<<<< HEAD
        {signUp ? (
          <HighlightButton type={"submit"} text={"Cadastrar"} />
        ) : (
          <HighlightButton type={"submit"} text={"Entrar"} />
        )}

        <h3>OU</h3>
        <div>
          <img className="icon" src={Google} alt="googleIcon" />
          <FormButton text={"Conectar com o Google"} />
        </div>

        <div>
          <img className="icon" src={Microsoft} alt="microsoftIcon" />
          <FormButton text={"Conectar com a Microsoft"} />
        </div>
        <div>
          <img className="icon" src={Github} alt="githubIcon" />
          <FormButton text={"Conectar com Github"} />
        </div>

=======
        <SubmitButton type={"submit"} text={signUp ? "Cadastrar" : "Entrar"} />

        <h3>OU</h3>
        <SocialMediaLogin />
>>>>>>> f7d0ad0a7c4ef2b5f15515e96c4adec9b875eb48
        <hr />

        {signUp ? (
          <Link to="/signIn">Já tem conta? Entrar</Link>
        ) : (
          <Link to="/signUp">Criar conta</Link>
        )}

        {signUp && <h6>Recuperar senha</h6>}
      </Form>
    </Container>
  );
}

export default AdForm;
