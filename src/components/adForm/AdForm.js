import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

//services to access api
import { createUser, loginUser } from "../../services/userServices";
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from "../buttons/HighlightButton";
import DefaultButton from "../buttons/DefaultButton";
import { Checkbox } from "../buttons/Checkbox"

//images
import Logo from "../../images/logo-doarte.png";
import Github from "../../images/githubimg.png";
import Microsoft from "../../images/microsoftimg.png";
import Google from "../../images/googleimg.png";

//styled components
import { Form, Container } from "./AdForm.styles";

function AdForm({ signUp }) {
  const { authenticated, handleAuth } = useContext(Context);
  console.log(authenticated);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp ? createUser(user) : loginUser(user)
    .then(({acessToken}) => handleAuth(acessToken))
  };

  const takeValue = e => {
    const {id, value} = e.target;

    setUser(prevState =>({...prevState, [id]:value}));
  }

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
        <img src={Logo} alt="DOARTE" />

        {signUp && (
          <label type="text">Nome</label>
        )}
        {signUp && (
          <input type="text" onBlur={takeValue} required/>
        )}

        <label htmlFor="id">E-mail</label>
        <input type="email"  onBlur={takeValue} required/>
        <label htmlFor="id">Senha</label>
        <input type="password" onBlur={takeValue} required/>
        

        {signUp && (<Checkbox label={"Li e concordo com as Condições e Termos de Uso."}/>)}

        {signUp ? (
            <HighlightButton type={"submit"} text={"Cadastrar"} />
        ) : (
            <HighlightButton type={"submit"} text={"Entrar"}/>
        )}

        <h3>OU</h3>

        <div>
          <img src={Google} alt="Logo da empresa Google"/>
          <DefaultButton text={"Conectar com o Google"} />
        </div>

        <div>
          <img src={Microsoft} alt="Logo da empresa Microsoft"/>
          <DefaultButton text={"Conectar com a Microsoft"} />
        </div>
        <div>
          <img src={Github} alt="Logo da plataforma Github"/>
          <DefaultButton text={"Conectar com Github"} />
        </div>

        <hr />

        {signUp ? (
          <Link to="/signIn">Já tem conta? Entrar</Link>
        ) : (
          <Link to="/signUp">Criar conta</Link>
        )}

        {signUp && (<h6>Recuper senha</h6>)}
      </Form>
    </Container>
  );
}

export default AdForm;
