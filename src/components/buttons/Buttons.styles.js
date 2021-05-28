import styled from "styled-components";

export const CommonButton = styled.button`
  width: 150px;
  height: 2rem;
  border: ${(props) => (props.primary ? "1px solid var(--orange)" : "none")};
  border-radius: 50px;
  background: transparent;
  padding: 0.3rem;
  font: 500 16px "Rubik", sans-serif;
  color: ${(props) => (props.primary ? "var(--orange)" : "var(--black)")};
  transition: all 0.3s;

  &:hover {
    color: var(--white);
    background-color: var(--orange);
    border: 1px solid var(--orange);
  }
`;

export const FancyButton = styled.button`
  width: 250px;
  grid-area: button;
  height: 60px;
  border: ${(props) => (props.primary ? "none" : "1px solid var(--orange)")};
  border-radius: 10px;
  background: ${(props) => (props.primary ? "var(--orange)" : "transparent")};
  padding: 0.3rem;
  color: ${(props) => (props.primary ? "var(--white)" : "var(--black)")};
  text-transform: ${(props) => props.primary && "uppercase"};
  font: 500 16px "Rubik", sans-serif;

  &:hover {
    color: var(--orange);
    background-color: var(--white);
    border: 1px solid var(--orange);
  }

  @media (max-width: 767px) {
    height: 40px;
    font-size: 14px;
  }
`;
