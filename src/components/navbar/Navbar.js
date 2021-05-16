import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Nav = styled.nav
`
    width: 40%;
`
const List = styled.ul
`
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Item = styled.li
`
    color: var(--white);

`
const NavLink = styled(Link)
`
    text-decoration: none;
    color: var(--black);
`

function Navbar() {
    return (
        <Nav>
            <List>
                <Item>
                    <NavLink to="/">Sobre</NavLink>
                </Item>
                <Item>
                    <NavLink to="/">Aliados</NavLink>
                </Item>
                <Item>
                    <NavLink to="/">Projetos</NavLink>
                </Item>
                <Item>
                    <NavLink to="/">Dúvidas</NavLink>
                </Item>
            </List>
        </Nav>
    )
}

export default Navbar
