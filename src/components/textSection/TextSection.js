import styled from 'styled-components';

import TextBox from '../textBox/TextBox';
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
        "image list";
    grid-gap: 10px;
`

function TextSection() {
    return (
        <Container>
            <TextBox 
                title={"Por que o Doarte?"}
                subtitle={"Fique por dentro de nossos benefícios exclusivos."}
            />
            <ProList/>
        </Container>
    )
}

export default TextSection
