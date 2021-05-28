import styled from "styled-components";

export const Card = styled.div`
  grid-area: prod;
  width: 300px;
  padding: 1.3rem;
  height: 500px;
  margin: 0 10px;
  border-radius: 10px;
  background: linear-gradient(to bottom, var(--bronze) 1%, var(--snow) 30%);
  border: 1px solid var(--orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 1.5rem;
  }
`;

export const EditBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ShowFormButton = styled.button`
  background: none;
  border: none;
`;

export const ProductInfo = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    "title title"
    "desc desc"
    "bar bar";

  h3 {
    grid-area: title;
    color: var(--blue);
    font-family: "Montserrat", sans-serif;
  }

  div {
    grid-area: bar;
    width: 100%;
  }

  p {
    grid-area: desc;
    line-height: 1.2rem;
    text-align: left;
    margin: 1rem;
  }
`;
