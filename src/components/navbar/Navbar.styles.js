import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Nav = styled.nav
`
    width: 40%;
`;

export const List = styled.ul
`
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Item = styled.li
`
    color: var(--white);

`;

export const NavLink = styled(Link)
`
    text-decoration: none;
    color: var(--black);
`;