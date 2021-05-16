import styled from 'styled-components';

import Banner from '../banner/Banner';
import TextSection from '../textSection/TextSection';
import CardCarousel from '../cardCarousel/CardCarousel';

const Main = styled.main
`
    width: 80%;
    grid-area: main;
    justify-self: center;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80vh auto auto auto;

    grid-template-areas: 
        "banner banner banner"
        "text text text"
        "cards cards cards"
        "map map map";
    grid-gap: 5rem;
`

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
