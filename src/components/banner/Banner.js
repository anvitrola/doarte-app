import styled from 'styled-components';

import InfoBar from '../infoBar/InfoBar';
import MainText from '../mainText/MainText';
import HighlightButton from '../buttons/HighlightButton';

const Container = styled.section
`   
    grid-area: banner;
    justify-self: center;
    grid-column: 1 4;
    display: grid;
    grid-template-rows: auto auto 7rem;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 
        "text image"
        "button image"
        "infobar infobar";
    grid-gap: 10px;
`

function Banner() {
    return (
        <Container>
            <InfoBar/>
            <MainText 
                title={"Conectando doadores e causas"}
                subtitle={"Encontre suporte financeiro de uma forma flexível e prática. Sem burocracias."}
                main={true}
            />
            <HighlightButton 
                text={"Cadastre-se"} 
                position={"button"}
                primary={true}
            />
        </Container>
    )
}

export default Banner
