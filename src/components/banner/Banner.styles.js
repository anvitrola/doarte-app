import styled from 'styled-components';

export const Container = styled.section
`   
    grid-area: banner;
    justify-self: center;
    display: grid;
    grid-template-rows: auto auto 120px;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 
        "text image"
        "button image"
        "infobar infobar";
    grid-gap: 10px;
`;