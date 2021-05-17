import styled from 'styled-components';

export const TextContainer = styled.section
`   
    width: 80%;
    grid-area: text;
    justify-self: center;
    display: grid;
    grid-template-rows: 2fr 5fr;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 
        "image text"
        "image list";
    grid-gap: 10px;
`;