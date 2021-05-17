//componente principal da página inicial
import {Main} from './MainContent.styles';

import Banner from '../banner/Banner';
import TextSection from '../textSection/TextSection';
import CardCarousel from '../cardCarousel/CardCarousel';
import Map from '../map/Map';

function MainContent() {
    return (
        <Main>
            <Banner/>
            <TextSection/>
            <CardCarousel/>
            <Map/>
        </Main>
    )
}

export default MainContent
