import {Nav, List, NavLink} from './Navbar.styles';

function Navbar() {
    return (
        <Nav>
            <List>
                <li>
                    <NavLink to="/">Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/">Aliados</NavLink>
                </li>
                <li>
                    <NavLink to="/">Projetos</NavLink>
                </li>
                <li>
                    <NavLink to="/">Dúvidas</NavLink>
                </li>
            </List>
        </Nav>
    )
}

export default Navbar
