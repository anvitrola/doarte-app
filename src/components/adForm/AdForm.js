import { Link } from "react-router-dom";
import React, { useContext, useRef, useState } from "react";

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

  const [err,setErr] = useState(false);

  const formElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const user = takeValue();
   
    if(signUp){
      createUser(user)
      .then(response => {
        if(response === undefined)setErr(true);
        else(alert(response))
      })
    } 
    else {
      loginUser(user)
      .then((data) => {
        console.log(data)
        if(data === undefined)setErr(true)
        else handleAuth(data.acessToken, data.id);
      })
    }
  };

  function takeValue(){
    const form = formElement.current;

    let user =
    {
      name: form['name'].value,
      email: form['email'].value,
      password: form['password'].value,
    }
   
    return user;
  }

  

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit} ref={formElement}>
        <Logo
          src={BrandLogo}
          alt="Logotimo do site Doarte. Um círculo composto por várias mãos"
        />

        {err && !signUp && (<h6>Usuário e/ou senha inválidos</h6>)}
        {err && signUp && (<h6>Oooops! Usuário já cadastrado!</h6>)}

        <Fields>
          {signUp && (
            <FormField text={"Nome"} id={"name"} type={"text"}  />
          )}


          <FormField text={"Email"} id={"email"} type={"email"}  />
          <FormField text={"Senha"} id={"password"} type={"password"}  />


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
