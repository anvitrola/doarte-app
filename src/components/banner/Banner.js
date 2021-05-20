import {Container} from './Banner.styles';
import Picture from "../../images/16.png";

import InfoBar from '../infoBar/InfoBar';
import TextBox from '../textBox/TextBox';
import HighlightButton from '../buttons/HighlightButton';

function Banner() {
    return (
        <Container>
            <img src={Picture} alt="Contorno de cor preta de dois personagens juntos, um de aparência masculina e outro de aparência feminina, que aparentam estar conversando."/>
            <InfoBar/>
            <TextBox 
                title={"Conectando doadores á causas"}
                subtitle={"Encontre suporte financeiro de uma forma flexível e prática."}
                main={true}
            />
            <HighlightButton 
                text={"Quero doar"} 
                position={"button"}
                primary={true}
            />
        </Container>
    )
}

export default Banner
