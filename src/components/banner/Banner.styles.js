import styled from "styled-components";

export const Container = styled.section`
  grid-area: banner;
  justify-self: center;
  display: grid;
  grid-template-rows: auto auto 120px;
  grid-template-columns: 2fr 2fr;
  grid-template-areas:
    "text image"
    "button image"
    "infobar infobar";
  grid-gap: 10px;

  img {
    grid-area: image;
    align-self: center;
    justify-self: center;
    width: 500px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    img {
      width: 300px;
    }
  }
`;
