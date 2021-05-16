import styled from 'styled-components';

import { IconContext } from "react-icons";
import { FaCheckCircle } from 'react-icons/fa';


const List = styled.ul
`   
    height: 90%;
    align-self: center;
    grid-area: list;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Item = styled.li
`
    display: flex;
`
const Text = styled.p
`
    color: var(--white);
    margin-left: 1rem;
    font-weight: 600;
    text-transform: capitalize;
`

function ProList() {
    return (
        <List>
            <Item>
                <IconContext.Provider value={{ color: "green", size: "1.7rem"}}>
                    <FaCheckCircle/>
                </IconContext.Provider>
                <Text>Ganhe 1000 moedas ao se cadastrar.</Text>
            </Item>
            <Item>
                <IconContext.Provider value={{ color: "green", size: "1.7rem"}}>
                    <FaCheckCircle/>
                </IconContext.Provider>
                <Text>Cadastro simples. Sem burocracia.</Text>
            </Item>
            <Item>
                <IconContext.Provider value={{ color: "green", size: "1.7rem"}}>
                    <FaCheckCircle/>
                </IconContext.Provider>
                <Text>Garantimos sua segurança.</Text>
            </Item>
            <Item>
                <IconContext.Provider value={{ color: "green", size: "1.7rem"}}>
                    <FaCheckCircle/>
                </IconContext.Provider>
                <Text>Código aberto à comunidade.</Text>
            </Item>
        </List>
    )
}

export default ProList
