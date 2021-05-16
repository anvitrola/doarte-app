import React from 'react'
import styled from 'styled-components';
import Banner from '../banner/Banner';
import TextSection from '../textSection/TextSection';

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
        "appeal appeal appeal"
        "map map map";
    grid-gap: 5rem;
`

function MainContent() {
    return (
        <Main>
            <Banner/>
            <TextSection/>
        </Main>
    )
}

export default MainContent
