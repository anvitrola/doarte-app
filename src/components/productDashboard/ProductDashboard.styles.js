import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  align-self: center;
  justify-self: center;
  width: 90%;
  display: grid;
  padding: 2rem;
  grid-template-areas:
    "text pic"
    "one one"
    "two two";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr 2fr;
  border: 1px solid var(--white);
  border-radius: 10px;
  grid-gap: 3rem;

  img {
    grid-area: pic;
    align-self: center;
    justify-self: center;
  }

  div {
    align-self: center;
    justify-self: center;
  }
`;

export const Highlights = styled.section`
  width: 87%;
  grid-area: one;
  justify-self: center;
`;
export const Products = styled.section`
  width: 87%;
  grid-area: two;
  justify-self: center;
`;
