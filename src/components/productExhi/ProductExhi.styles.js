import styled from 'styled-components';

export const Exhibition = styled.section
`
    grid-area: exhi;
    justify-self: center;
    display: grid;
    grid-template-areas:
        "text text text"
        "prod prod prod";
    grid-template-rows: 1fr 3fr;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 57px;
`