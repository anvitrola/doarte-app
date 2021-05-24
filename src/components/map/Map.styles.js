import styled from "styled-components";

export const Container = styled.section`
  grid-area: map;
  height: 60vh;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;

  img {
    width: 85%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
