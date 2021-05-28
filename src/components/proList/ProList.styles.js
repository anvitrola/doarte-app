import styled from "styled-components";

export const List = styled.ul`
  height: 90%;
  align-self: center;
  grid-area: list;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: var(--gray);
  margin-left: 1rem;
  font: 500 16px "Rubik", sans-serif;
  text-transform: capitalize;
`;
