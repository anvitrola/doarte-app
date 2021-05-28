import styled from "styled-components";

export const Exhibition = styled.section`
  grid-area: exhi;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    h1{
      width:100%;
      font-size:26px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const NoContent = styled.h3
`
  color: var(--orange);
  width: 50%;
`
