import styled from "styled-components";

export const Cards = styled.section`
  grid-area: cards;
  justify-self: center;
  width: 58.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    border-radius: 8px;
  }

  @media (max-width: 767px) {
    width: 33rem;
    height:100%;
    grid-gap: 0.2px;

    div {
      width: 100%;
    }
  }
`;
