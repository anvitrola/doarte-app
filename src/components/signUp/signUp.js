import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div
`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100vh;

`;

export const Form = styled.form
`
  margin-top:60px;
  width: 400px;
  height:450px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: var(--white);
    font-size: 16px;
    background-color:var(--orange);
    height: 50px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }

  button:hover {
    color: var(--orange);
    background-color:var(--white);
    border: 1px solid var(--orange);

  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    color: var(--orange);
    margin-bottom: 15px;
    border: 1px solid var(--orange);
    padding: 10px;
    width: 100%;
    text-align: center;
    cursor:pointer;
    text-decoration: none;
  }
  a:hover{
    background-color:var(--orange);
    color: var(--white)

  }
`;
function SignUp() {

return (
    <Container>
      <Form >
        <img src={"Logo"} alt="DOARTE" />
        <input
          type="text"
          placeholder="Nome de usuário"
        />
        <input
          type="email"
          placeholder="Endereço de e-mail"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          required
        />
        <button type="submit">Cadastrar grátis</button>
        <hr />
        <Link to="/signIn">Fazer login</Link>
      </Form>
    </Container>
  );
}


export default SignUp;