import {Nav, List, NavLink} from './Navbar.styles';

function Navbar() {
    return (
        <Nav>
            <List>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/">Aliados</NavLink>
                </li>
                <li>
                    <NavLink to="/fundraisings">Projetos</NavLink>
                </li>
                <li>
                    <NavLink to="/doubts">Dúvidas</NavLink>
                </li>
            </List>
        </Nav>
    )
}

export default Navbar
