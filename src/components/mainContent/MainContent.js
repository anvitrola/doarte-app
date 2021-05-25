//components
import Banner from '../banner/Banner';
import TextSection from '../textSection/TextSection';
import CardCarousel from '../cardCarousel/CardCarousel';
import Map from '../map/Map';
import ProductExhi from '../productExhi/ProductExhi';

//styled components
import { Main } from './MainContent.styles';

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
};

export default MainContent;
