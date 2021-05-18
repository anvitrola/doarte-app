//componente principal da página inicial
import {Main} from './MainContent.styles';

import Banner from '../banner/Banner';
import TextSection from '../textSection/TextSection';
import CardCarousel from '../cardCarousel/CardCarousel';
import Map from '../map/Map';
import ProductExhi from '../productExhi/ProductExhi';

function MainContent() {
    return (
        <Main>
            <Banner/>
            <TextSection/>
            <ProductExhi/>
            <Map/>
            <CardCarousel/>
        </Main>
    )
}

export default MainContent
