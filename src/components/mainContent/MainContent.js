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
const Container = styled.div
`
grid-template-rows: 1rem auto 50px;
  	display: grid;
  	grid-template-areas: 
    	"header header"
    	"main main"
    	"footer footer";
  	grid-gap: 10px;
`


function MainContent() {
    return (
        <Container >
        <Main>
            <Banner/>
            <TextSection/>
        </Main>
        </Container>
    )
}

export default MainContent
