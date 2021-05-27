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
  grid-template-rows: 10rem 10rem repeat(2, 2fr);
  border: 1px solid var(--white);
  border-radius: 10px;
  grid-gap: 1rem;

  img {
    grid-area: pic;
    align-self: center;
    justify-self: center;
    margin: 12rem 0 0 15rem;
    width: 50%;
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
  width: 87%;
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
  width: 87%;
  grid-area: two;
  justify-self: center;
  text-align: center;

  @media (max-width: 767px) {
    width: 100%;
   
  }
`;

export const LinkBox = styled(Link)`
  grid-area: button;
  align-self: center;
  justify-self: center;
`;
