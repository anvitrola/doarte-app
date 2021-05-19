import { Link } from "react-router-dom";
import logo from "../../images/logo-doarte.png";
import {HeaderContainer, Buttons, Logo} from './Header.styles';

import DefaultButton from '../buttons/DefaultButton';
import Navbar from '../navbar/Navbar';

function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt={"Logo da Doarte. A palavra escrita normalmente, mas a letra 'O' é um círculo formado por mãos que se apoiam."}/>
            </Logo>
            <Navbar/>
            <Buttons>
                <Link to="/signUp">
                    <DefaultButton text={"Cadastre-se"}/>
                </Link> 
                <Link to="/signIn">
                    <DefaultButton text={"Entrar"} primary={true}/>
                </Link>
            </Buttons>
        </HeaderContainer>
    )
}

export default Header
