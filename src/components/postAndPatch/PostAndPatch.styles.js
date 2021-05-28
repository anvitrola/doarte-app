import styled from "styled-components";

export const Form = styled.form`
  grid-area: form;
  padding: 1.5rem;
  width: ${(props) => (props.larger ? "35rem" : "33rem")};
  border-radius: 10px;
  display: flex;
  box-shadow: 20px 15px var(--yellow);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: ${(props) => (props.larger ? "33rem" : "25rem")};
  background-color: var(--snow);

  label {
    color: var(--blue);
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
  }

  input {
    width: 90%;
    padding: 0.3rem;
    border-radius: 10px;

    &::placeholder {
      font-family: "Montserrat", sans-serif;
    }
  }

  button {
    width: 50%;
    height: 2.3rem;
    border-radius: 3px;
    background-color: var(--blue);
    color: var(--white);
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    box-shadow: 12px 10px var(--yellow);

    button {
      height: 2.6rem;
      width: 40%;
      padding: 2px;
    }
  }
`;
