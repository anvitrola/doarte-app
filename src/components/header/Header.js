import styled from 'styled-components';
import DefaultButton from '../buttons/DefaultButton';
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom'

const HeaderContainer = styled.header
`
    grid-area: header;
    padding: .3rem;
    margin: 12px auto;
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
    margin:2px;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo>Doarte</Logo>
            <Navbar/>
            <Buttons>
               <Link to="/signUp"><DefaultButton text={"Cadastre-se"}/></Link> 
                <Link to="/signIn"><DefaultButton text={"Entrar"} primary={true}/></Link>
            </Buttons>
        </HeaderContainer>
    )
}

export default Header
