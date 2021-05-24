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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Div = styled.div`
  align-items: center;
  justify-content: center;
  width: 59.5rem;
  height: 12.375rem;
  background: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 180px;
  top: 2760px;
  border-radius: 10px;

  div {
    width: 50%;
  }

  @media (max-width: 768px) {
    left: 0;
    top: 235rem;
    flex-direction: column;
    div {
      width: 100%;
      font-size: 14px;
    }
  }
`;
