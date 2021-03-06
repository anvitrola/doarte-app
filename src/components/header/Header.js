import React, { useContext } from "react";
import { Link } from "react-router-dom";

//authentication context
import { Context } from "../../contexts/AuthContext";

//components
import DefaultButton from "../buttons/DefaultButton";
import Navbar from "../navbar/Navbar";

//image
import logo from "../../images/logo-doarte.png";

//styled components
import { HeaderContainer, Buttons, Logo } from "./Header.styles";

function Header() {
  const { authenticated, handleLogout } = useContext(Context);

  return (
    <HeaderContainer>
      <Logo>
        <Link to={authenticated ? "/explore" : "/"}>
          <img
            src={logo}
            alt={
              "Logo da Doarte. A palavra escrita normalmente, mas a letra 'O' é um círculo formado por mãos que se apoiam."
            }
          />
        </Link>
      </Logo>

      <Navbar />

      {!authenticated ? (
        <Buttons>
          <Link to="/signUp">
            <DefaultButton text={"Cadastre-se"} />
          </Link>
          <Link to="/signIn">
            <DefaultButton text={"Entrar"} primary={true} />
          </Link>
        </Buttons>
      ) : (
        <Buttons>
          <Link to={`/profile`}>
          <DefaultButton primary={true} text={"Meu perfil"} />
        </Link>
          <DefaultButton text={"Sair"} clickEvent={handleLogout} />
        </Buttons>
      )}
    </HeaderContainer>
  );
}

export default Header;
