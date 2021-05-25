import styled from "styled-components";

export const Cards = styled.section`
  grid-area: cards;
  justify-self: center;
<<<<<<< HEAD
  width: 55.5rem;
=======
  height: 80vh;
  width: 920px;
>>>>>>> 9d5dc5d38ccbb06066adc67839a7fec38e1c7dbd
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    border-radius: 8px;
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
