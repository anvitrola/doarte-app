import styled from 'styled-components';

export const Main = styled.main
`
    width: 80%;
    grid-area: main;
    justify-self: center;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80vh auto auto auto auto;

    grid-template-areas: 
        "banner banner banner"
        "text text text"
        "exhi exhi exhi"
        "map map map"
        "cards cards cards";
    grid-gap: 5rem;
`;