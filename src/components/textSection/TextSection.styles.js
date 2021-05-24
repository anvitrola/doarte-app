import styled from "styled-components";

export const TextContainer = styled.section`
  width: 85%;
  grid-area: text;
  justify-self: center;
  display: grid;
  grid-template-rows: 2fr 5fr;
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    "image text"
    "image list";
  grid-gap: 10px;

  img {
    grid-area: image;
    width: 350px;
    align-self: center;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;

    img {
      width: 200px;
    }
  }
`;
