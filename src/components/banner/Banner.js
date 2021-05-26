import { Link } from "react-router-dom";

//components
import InfoBar from '../infoBar/InfoBar';
import TextBox from '../textBox/TextBox';
import HighlightButton from '../buttons/HighlightButton';

//image
import Picture from "../../images/16.png";

//styled components
import { Container } from './Banner.styles';

function Banner() {
    return (
        <Container>
            <img src={Picture} alt="Contorno de cor preta de dois personagens juntos, um de aparência masculina e outro de aparência feminina, que aparentam estar conversando."/>
            <InfoBar/>
            <TextBox 
                title={"Conectando doadores à causas"}
                subtitle={"A ajuda financeira que você precisa de maneira flexível e prática"}
                main={true}
            />

            <Link to="/signUp">
                <HighlightButton 
                    text={"QUERO DOAR"} 
                    position={"button"}
                    primary={true}
                />
            </Link>
        </Container>
    )
}

export default Banner
