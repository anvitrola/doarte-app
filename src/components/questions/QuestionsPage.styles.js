import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Article = styled.section`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "text"
    "paragrafo "
    "lista ";
  margin: 1rem 18rem;

  div {
    grid-area: text;
    justify-self: start;
    align-self: center;
  }

  p {
    grid-area: paragrafo;
    color: var(--blue);
    font-family: "Rubik", sans-serif;
    margin: 1rem 0;
    line-height: 22px;
    text-justify: center;
  }

  span {
    color: var(--gray);
    font-family: "Montserrat", sans-serif;
    margin: 1rem 1rem 0 0;
    font-weight: bold;
  }

  ul {
    grid-area: lista;
    list-style-type: none;
    line-height: 22px;

    li {
      color: var(--gray);
      font-family: "Rubik", sans-serif;
      margin-top: 0.3rem;
    }
  }

  h1 {
    margin-bottom: 3rem;
    font-family: "Montserrat", sans-serif;
  }
`;
