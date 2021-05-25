import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: div;
  align-self: center;
  justify-self: center;
  background: linear-gradient(to bottom, var(--bronze) 50%, var(--snow) 50%);
  display: flex;
  justify-content: center;
  height: 150px;
`;
export const Div = styled.div`
  align-items: center;
  justify-content: center;
  background: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  width: 80%;

  @media (max-width: 768px) {
   
    div {
      width: 100%;
      font-size: 14px;
    }
  }
`;
