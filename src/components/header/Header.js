import { Link } from "react-router-dom";

import {HeaderContainer, Buttons, Logo} from './Header.styles';

import DefaultButton from '../buttons/DefaultButton';
import Navbar from '../navbar/Navbar';

function Header() {
    return (
        <HeaderContainer>
            <Logo>Doarte</Logo>
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
