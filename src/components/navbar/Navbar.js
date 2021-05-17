import {Nav, List, Item, NavLink} from './Navbar.styles';

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
