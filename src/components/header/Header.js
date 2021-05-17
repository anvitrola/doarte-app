import {HeaderContainer, Buttons, Logo} from './Header.styles';

import DefaultButton from '../buttons/DefaultButton';
import Navbar from '../navbar/Navbar';

function Header() {
    return (
        <HeaderContainer>
            <Logo>Doarte</Logo>
            <Navbar/>
            <Buttons>
                <DefaultButton text={"Cadastre-se"}/>
                <DefaultButton text={"Entrar"} primary={true}/>
            </Buttons>
        </HeaderContainer>
    )
}

export default Header
