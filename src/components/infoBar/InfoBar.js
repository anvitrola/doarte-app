import styled from 'styled-components';

import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiDonateHeart } from "react-icons/bi";


const InfoContainer = styled.div
`
    grid-area: infobar;
    justify-self: center;
    width: 100%;
    border-radius: 7px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const InfoDiv = styled.div
`
    padding: .3rem;
    display: flex;
    width: 33%;
    justify-content: center;
`
const TextDiv = styled.div
`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
`
const Text = styled.p
`
    color: var(--black);
`
function InfoBar() {
    return (
        <InfoContainer>
            <InfoDiv>
                <IconContext.Provider value={{ color: "var(--orange)", size: "1.7rem"}}>
                    <FaUserCircle/>
                </IconContext.Provider>
                <TextDiv>
                    <Text><b>90+</b></Text>
                    <Text>usuários</Text>
                </TextDiv>
            </InfoDiv>

            <InfoDiv>
                <IconContext.Provider value={{ color: "var(--orange)", size: "1.7rem"}}>
                    <GoLocation/>
                </IconContext.Provider>
                <TextDiv>
                    <Text><b>20+</b></Text>
                    <Text>estados</Text>
                </TextDiv>
            </InfoDiv>

            <InfoDiv>
                <IconContext.Provider value={{ color: "var(--orange)", size: "1.7rem"}}>
                    <BiDonateHeart/>
                </IconContext.Provider>
                <TextDiv>
                    <Text><b>50+</b></Text>
                    <Text>causas</Text>
                </TextDiv>
            </InfoDiv>
        </InfoContainer>
    )
}

export default InfoBar
