import React, { useContext } from "react";

//authentication context
import { Context } from "../../contexts/AuthContext";

import { Nav, List, NavLink } from "./Navbar.styles";

function Navbar() {
  const { authenticated } = useContext(Context);

  return (
    <Nav>
      <List>
        {!authenticated && (
          <li>
            <NavLink to={authenticated ? "/explore" : "/"}>Sobre</NavLink>
          </li>
        )}

        <li>
          <NavLink to={"/aliados"}>Aliados</NavLink>
        </li>

        <li>
          <NavLink to="/explore">Explorar</NavLink>
        </li>
        
        <li>
          <NavLink to={authenticated ? "/explore" : "/"}>Dúvidas</NavLink>
        </li>
      </List>
    </Nav>
  );
};

export default Navbar;
