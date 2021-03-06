import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;
  padding: 2rem 0 4rem 0;
  height: auto;
  width: 80%;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-areas:
    "greeting greeting image"
    "form form image"
    "delete delete delete";
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;

  img {
    grid-area: image;
    align-self: center;
    justify-self: center;
    width: 450px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
      width: 50%;
    }
  }
`;

export const Greetings = styled.section`
  grid-area: greeting;
  align-self: center;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    color: var(--blue);
    font-size: 2rem;
  }

  h4 {
    margin-left: 1rem;
    color: var(--gray);
  }
`;

export const DeleteArea = styled.section`
  grid-area: delete;
  align-self: end;
`;
