import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

//services to access api
import { createUser, loginUser } from "../../services/userServices";
import { Context } from "../../contexts/AuthContext";

//component
import SocialMediaLogin from "../socialMediaLogin/SocialMediaLogin";
import FormField from "../formField/FormField";

//brand logo
import BrandLogo from "../../images/logo-doarte.png";

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

    signUp
    ? createUser(user)
    : loginUser(user)
      .then(({ acessToken }) => {
        handleAuth(acessToken);
        console.log(acessToken)
      })
  };

  const takeValue = (e) => {
    const { id, value } = e.target;

    setUser((prevState) => ({ ...prevState, [id]: value }));

    console.log(user);
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
        <Logo src={BrandLogo} alt="Logotimo do site Doarte. Um círculo composto por várias mãos"/>

        <Fields>

          {signUp && (
            <FormField text={"Nome"} type={"text"} getValue={takeValue} />
          )}

          <FormField text={"Email"} type={"email"} getValue={takeValue} />
          <FormField text={"Senha"} type={"password"} getValue={takeValue} />

        </Fields>

        <SubmitButton type={"submit"} text={signUp ? "Cadastrar" : "Entrar"} />

        <h3>OU</h3>
        <SocialMediaLogin />
        <hr />

        {signUp ? (
          <Link to="/signIn">Já tem conta? Entrar</Link>
        ) : (
          <Link to="/signUp">Criar conta</Link>
        )}

      </Form>
    </Container>
  );
}

export default AdForm;
