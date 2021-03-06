import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;
  padding: 0.3rem;
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    align-items: space-around;
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  img {
    width: 125px;
  }

  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const Buttons = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 767px) {
    margin: 1rem;
  }
`;
