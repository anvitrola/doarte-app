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
`;

export const FancyButton = styled.button`
  width: 250px;
  grid-area: button;
  height: 60px;
  font: 500 16px "Rubik", sans-serif;
  border: ${(props) => (props.primary ? "none" : "1px solid var(--orange)")};
  border-radius: 10px;
  background: ${(props) => (props.primary ? "var(--orange)" : "transparent")};
  padding: 0.3rem;
  color: ${(props) => (props.primary ? "var(--white)" : "var(--black)")};
  text-transform: ${(props) => props.primary && "uppercase"};

  &:hover {
    color: var(--orange);
    background-color: var(--white);
    border: 1px solid var(--orange);
  }
`;
  
 export const ConnectButton = styled.text`
    cursor: pointer;
    text-align: center;
    border-radius:18px;
    color:var(--black);
    font-size: 15px;
    padding: 0.5rem;
  `;