import styled from 'styled-components';

export const Container = styled.section
`   
    grid-area: banner;
    justify-self: center;
    grid-column: 1 4;
    display: grid;
    grid-template-rows: auto auto 7rem;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 
        "text image"
        "button image"
        "infobar infobar";
    grid-gap: 10px;
`;