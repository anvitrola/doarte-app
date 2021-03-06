import styled from "styled-components";

export const Main = styled.main`
  width: 80%;
  grid-area: main;
  justify-self: center;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80vh repeat(4, auto);

  grid-template-areas:
    "banner banner banner"
    "text text text"
    "exhi exhi exhi"
    "map map map"
    "cards cards cards";
  grid-gap: 5rem;

  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    grid-gap: 2.5rem;
  }
`;
