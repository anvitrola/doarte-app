import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 5rem);
`;

export const Form = styled.form`
  width: 400px;
  height: 400px;
  border-radius: 3px;
  background: var(--white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    margin: 8px 0 40px;
  }

  button {
    color: var(--white);
    font-size: 16px;
    background-color: var(--orange);
    height: 50px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }

  a {
    color: var(--orange);
    margin-bottom: 15px;
    border: 1px solid var(--orange);
    padding: 10px;
    border-radius: 10px;
    font: 500 16px 'Rubik', sans-serif;
    width: 100%;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    background-color: var(--orange);
    color: var(--white);
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

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
`;
