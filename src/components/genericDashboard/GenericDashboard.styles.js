import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  align-self: center;
  justify-self: center;
  width: 90%;
  margin: 2rem 0 4rem 0;
  display: grid;
  padding: 2rem 3rem;
  grid-template-areas:
    "text pic"
    "button pic"
    "one one"
    "two two";
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr repeat(2, 5fr);
  border: 1px solid var(--white);
  border-radius: 10px;
  grid-gap: 3rem;

  img {
    grid-area: pic;
    align-self: center;
    justify-self: center;
    margin: 8rem 0 0 20rem;
    width: 45%;
    transform: translate(-50%, -50%);
    animation: rotate 12s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  div {
    align-self: center;
    justify-self: center;
  }

  h2{
    font-family: 'Rubik', sans-serif;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 3px;
    margin-bottom: 1rem;
    color: var(--blue);
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

export const LinkBox = styled(Link)
`
  grid-area: button;
  align-self: center;
  justify-self: center;
`

