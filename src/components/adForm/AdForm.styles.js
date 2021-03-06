import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const Form = styled.form`
  width: 600px;
  height: 800px;
  border-radius: 10px;
  background: var(--white);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h6 {
    font: 500 12px "Rubik", sans-serif;
    text-align: center;
    color: var(--red);
    margin-top: 1%;
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

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 90%;

    button {
      width: 55%;
    }

    input {
      width: 100%;
    }
  }
`;

export const SubmitButton = styled.button`
  color: var(--white);
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  background-color: var(--orange);
  padding: 1rem;
  border: 0;
  border-radius: 18px;
  width: 50%;
  margin: 2rem 0;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const Fields = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
`;
