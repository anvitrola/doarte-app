import { Link } from "react-router-dom";
import history from '../../history';

//hooks
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit } = useForm();

  const onSubmit = (user) => {
    if(signUp){
      createUser(user)
      .then(response => {
        if(response === undefined)setErr(true);
        else{
          alert(response)
          history.push('/signIn')
        }
      })
    } 
    else {
      loginUser(user)
      .then((data) => {
        if(data === undefined)setErr(true)
        else handleAuth(data.acessToken, data.id);
      })
    }
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Logo
          src={BrandLogo}
          alt="Logotimo do site Doarte. Um círculo composto por várias mãos"
        />

        {err && !signUp && (<h6>Usuário e/ou senha inválidos</h6>)}
        {err && signUp && (<h6>Oooops! Usuário já cadastrado!</h6>)}

        <Fields>
          {signUp && (
            <FormField text={"Nome"} register={register} name={"name"} type={"text"} required />
          )}


          <FormField text={"Email"} register={register} name={"email"} type={"email"} required />
          <FormField text={"Senha"} register={register} name={"password"} type={"password"} required />


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
