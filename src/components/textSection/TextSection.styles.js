import styled from "styled-components";

export const TextContainer = styled.section`
  width: 85%;
  margin-top: 7rem;
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
    width: 500px;
    align-self: center;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    img {
      width: 100%;
    }
  }
`;
