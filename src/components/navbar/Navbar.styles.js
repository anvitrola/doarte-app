import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 40%;
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    justify-content:space-evenly;
    align-items:space-around;
    a{
      margin:0.5rem;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--gray);
  font: 400 19px "Rubik", sans-serif;
`;
