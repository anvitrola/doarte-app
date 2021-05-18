import TextBox from '../textBox/TextBox';
import HighlightButton from '../buttons/HighlightButton';

import {Div} from './FloatingDiv.styles';

function FloatingDiv() {
    return (
        <Div>
            <TextBox title={"Encontre causas que se adequam a você"}/>
            <HighlightButton primary={true} text={"Conectar-se"}/>
        </Div>
    )
}

export default FloatingDiv
