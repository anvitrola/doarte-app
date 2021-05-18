import TextBox from '../textBox/TextBox';
import Mapicture from "../../images/Map.png"

import {Container} from './Map.styles';

function Map() {
    return (
        <Container>
            <TextBox title={"Onde estamos?"} subtitle={"Unindo causas a doadores ao redor do mundo"}/>

            <img src={Mapicture} alt="Mapa mundi em tom bege"/>
        </Container>
    )
}

export default Map
