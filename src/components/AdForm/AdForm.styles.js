import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  width: 500px;
  height: 850px;
  border-radius: 10px;
  background: var(--white);
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 10px;
  }

  h3 {
    margin: 40px;
  }

  label {
    width: 85%;
    text-align: left;
    margin-top: 15px;
    font-size: 16px;
    padding: 2px;
  }

  img {
    width: 120px;
    margin: 0 0 40px;
  }

  button {
    color: var(--white);
    font-size: 16px;
    background-color: var(--orange);
    height: 40px;
    border: 0;
    border-radius: 18px;
    width: 40%;
    margin-top: 2rem;
  }

  a {
    color: #3e9ec8;
    padding: 10px;
    border-radius: 18px;
    font: 500 12px "Rubik", sans-serif;
    width: 90%;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }

  input {
    height: 35px;
    border-radius: 18px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 90%;
    border: 2px solid #f0d4a3;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 50%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f0d4a3;
    border-radius: 18px;
    width: 90%;
    margin: 10px;
  }

  .icon {
    width: 5%;
    margin: 0;
  }
  .checkbox {
    width: 5%;
    height: 14px;
  }

  .termText {
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-bottom: 2px;
  }
`;
