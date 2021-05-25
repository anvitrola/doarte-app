import { Nav, List, NavLink } from "./Navbar.styles";

function Navbar({ auth }) {
  return (
    <Nav>
      <List>
        {!auth && (
          <li>
            <NavLink to={auth ? "/explore" : "/"}>Sobre</NavLink>
          </li>
        )}

        <li>
          <NavLink to={auth ? "/explore" : "/"}>Aliados</NavLink>
        </li>

        <li>
          <NavLink to="/explore">Explorar</NavLink>
        </li>
        
        <li>
          <NavLink to={auth ? "/explore" : "/"}>Dúvidas</NavLink>
        </li>
      </List>
    </Nav>
  );
}

export default Navbar;
