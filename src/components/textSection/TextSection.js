import { TextContainer } from './TextSection.styles';

import TextBox from '../textBox/TextBox';
import ProList from '../proList/ProList';

function TextSection() {
    return (
        <TextContainer>
            <TextBox 
                title={"Por que o Doarte?"}
                subtitle={"Fique por dentro de nossos benefícios exclusivos."}
            />
            <ProList/>
        </TextContainer>
    )
}

export default TextSection
