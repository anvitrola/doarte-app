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

  const [err, setErr] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if(signUp){
      createUser(user)
      .then(response => {
        if(!response === undefined)alert(response);
        else(setErr(true))
      })
    } 
    else {
      loginUser(user)
      .then((data) => {
        if(!data === undefined)handleAuth(data.acessToken, data.id);
        else(setErr(true))
      })
    }
  };

  const takeValue = (e) => {
    const { id, value } = e.target;

    setUser((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
        <Logo
          src={BrandLogo}
          alt="Logotimo do site Doarte. Um círculo composto por várias mãos"
        />

        {err && !signUp && (<h6>Usuário e/ou senha inválidos</h6>)}
        {err && signUp && (<h6>Oooops! Usuário já cadastrado!</h6>)}

        <Fields>
          {signUp && (
            <FormField text={"Nome"} id={"name"} type={"text"} getValue={takeValue} />
          )}


          <FormField text={"Email"} id={"email"} type={"email"} getValue={takeValue} />
          <FormField text={"Senha"} id={"password"} type={"password"} getValue={takeValue} />


        </Fields>

        <SubmitButton type="submit">
          {signUp ? "Cadastrar" : "Entrar"}
        </SubmitButton>

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
