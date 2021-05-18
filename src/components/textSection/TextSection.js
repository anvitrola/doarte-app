import { TextContainer } from './TextSection.styles';
import Picture from "../../images/1.png";

import TextBox from '../textBox/TextBox';
import ProList from '../proList/ProList';

function TextSection() {
    return (
        <TextContainer>
            <img src={Picture} alt="Contorno de cor preta de uma personagem de aparência feminina"/>
            <TextBox 
                title={"Vantagens Doarte"}
                subtitle={"Fique por dentro de nossos benefícios exclusivos."}
            />
            <ProList/>
        </TextContainer>
    )
}

export default TextSection
