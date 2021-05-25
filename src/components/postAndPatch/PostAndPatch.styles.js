import styled from "styled-components";

export const Form = styled.form`
  grid-area: form;
  padding: 1.5rem;
  width: 30rem;
  border-radius: 10px;
  display: flex;
  box-shadow: 20px 15px var(--blue);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 20rem;
  background-color: var(--snow);

  label {
    color: var(--blue);
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
  }

  input {
    width: 90%;
    padding: 0.3rem;
    border: none;
    border-radius: 10px;

    &::placeholder {
      font-family: "Montserrat", sans-serif;
    }
  }

  button {
    width: 7rem;
    height: 2.3rem;
    border-radius: 3px;
    background-color: var(--blue);
    color: var(--white);
  }
`;
