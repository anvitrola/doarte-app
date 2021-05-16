import styled from 'styled-components';
import DefaultButton from '../buttons/DefaultButton';
import Navbar from '../navbar/Navbar';

const HeaderContainer = styled.header
`
    grid-area: header;
    padding: .3rem;
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Logo = styled.h1
`
    color: var(--black);
` 
const Buttons = styled.div
`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

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
