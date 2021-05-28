import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "image text"
    "button button";
  gap: 10px;
  margin: 2rem 0;

  img {
    grid-area: image;
    justify-self: center;
    align-self: center;
  }

  a {
    grid-area: button;
    margin-top: 1.5rem;
    justify-self: end;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Stone = styled.img`
  width: 300px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const Resilia = styled.img`
  width: 150px;
  border-radius: 50%;
`;
