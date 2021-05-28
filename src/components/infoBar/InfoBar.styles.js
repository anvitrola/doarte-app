import styled from "styled-components";

export const InfoContainer = styled.div`
  grid-area: infobar;
  justify-self: center;
  width: 100%;
  border-radius: 7px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const InfoDiv = styled.div`
  padding: 0.3rem;
  display: flex;
  width: 33%;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    width: 5%;
    margin-left: 0.3rem;
  }
`;

export const Text = styled.p`
  color: var(--black);
  font: 400 20px "Rubik", sans-serif;

  @media (max-width: 768px) {
    width: 5%;
    margin-left: 0.5rem;
    font-size: 16px;
  }
`;
