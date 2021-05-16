import styled from 'styled-components';

import MainText from '../mainText/MainText';
import HighlightButton from '../buttons/HighlightButton';
import ProList from '../proList/ProList';

const Container = styled.section
`   
    width: 80%;
    grid-area: text;
    justify-self: center;
    display: grid;
    grid-template-rows: 2fr 5fr 2fr;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 
        "image text"
        "image list"
        "image button";
    grid-gap: 10px;
`

function TextSection() {
    return (
        <Container>
            <MainText 
                title={"Por que o Doarte?"}
                subtitle={"Fique por dentro de nossos benefícios exclusivos."}
            />
            <HighlightButton 
                text={"Cadastre-se"}
                primary={true}
            />
            <ProList/>
        </Container>
    )
}

export default TextSection
