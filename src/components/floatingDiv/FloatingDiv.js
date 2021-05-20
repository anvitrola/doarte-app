import TextBox from '../textBox/TextBox';
import HighlightButton from '../buttons/HighlightButton';

import {Div, Container} from './FloatingDiv.styles';

function FloatingDiv() {
    return (
        <Container>
            <Div>
                <TextBox title={"Encontre causas que se adequam a você"}/>
                <HighlightButton primary={true} text={"Conectar-se"}/>
            </Div>
        </Container>
    )
}

export default FloatingDiv
