import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

//services to access api
import { createUser, loginUser } from "../../services/userServices";
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from "../buttons/HighlightButton";
import DefaultButton from "../buttons/DefaultButton";
import { Checkbox } from "../buttons/Checkbox"
import FormButton from "../buttons/ConnectButton";

//images
import Logo from "../../images/logo-doarte.png";
import Github from "../../images/githubimg.png";
import Microsoft from "../../images/microsoftimg.png";
import Google from "../../images/googleimg.png";
import { Form, Container } from "./AdForm.styles";

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
          
        {signUp ? (
          <h4>Fazer Cadastro na Doarte</h4>
        ) : (
          <h4>Fazer Login na Doarte</h4>
        )}

        {signUp && <label type="text">Nome</label>}

        {signUp && <input type="text" />}
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Senha</label>
        <input type="password" id='password' required />

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
          <img className="icon" src={Google} alt="googleIcon" />
          <FormButton text={"Conectar com o Google"} />
        </div>

        <div>
          <img className="icon" src={Microsoft} alt="microsoftIcon"  />
          <FormButton text={"Conectar com a Microsoft"} />
        </div>
        <div>
          <img className="icon" src={Github} alt="githubIcon"  />
          <FormButton text={"Conectar com Github"} />

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
        ) : (
          <Link to="/signUp">Criar conta</Link>
        )}

        {signUp && (<h6>Recuper senha</h6>)}
      </Form>
    </Container>
  );
}

export default AdForm;
