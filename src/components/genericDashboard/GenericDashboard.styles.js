import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  align-self: center;
  justify-self: center;
  width: 90%;
  margin: 1rem 0 4rem 0;
  display: grid;
  padding: 1rem 3rem;
  grid-template-areas:
    "text pic"
    "button pic"
    "one one"
    "two two";
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(4, auto);
  border: 1px solid var(--white);
  border-radius: 10px;
  grid-gap: .5rem;

  img {
    grid-area: pic;
    align-self: center;
    justify-self: center;
    margin: 8rem 0 0 15rem;
    width: 55%;
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

  h2 {
    font-family: "Rubik", sans-serif;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 3px;
    margin-bottom: 1rem;
    color: var(--blue);
    text-transform: uppercase;
  }

  h1{
    font-weight: 600;
    color: tomato;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 5rem 0 0rem 8rem;
      width: 45%;
    }
  }
`;

export const Highlights = styled.section`
  width: 95%;
  grid-area: one;
  justify-self: center;

  @media (max-width: 767px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Products = styled.section`
  width: 95%;
  grid-area: two;
  justify-self: center;
  text-align: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const LinkBox = styled(Link)`
  grid-area: button;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue);
  padding: .5rem;
  width: 228px;
  font-family: 'Rubik';
  height: 3.7rem;
  text-transform: uppercase;
  color: var(--snow);
`;
