import {Main} from './MainContent.styles';

import Banner from '../banner/Banner';
import TextSection from '../textSection/TextSection';
import CardCarousel from '../cardCarousel/CardCarousel';

function MainContent() {
    return (
        <Main>
            <Banner/>
            <TextSection/>
            <CardCarousel/>
        </Main>
    )
}

export default MainContent
