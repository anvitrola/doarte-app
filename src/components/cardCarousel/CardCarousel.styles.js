import styled from "styled-components";

export const Cards = styled.section`
  grid-area: cards;
  justify-self: center;
  width: 55.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  div {
    border-radius: 8px;
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 33rem;
    height:100%;
    grid-gap: 0.2px;

    div {
      width: 100%;
    }
  }
`;
