import styled from "styled-components";

export const Bar = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    h6{
        font-size: 14px;
        color: var(--blue);
        font-family: 'Rubik', sans-serif;
        text-transform: uppercase;
    }

    div{
        width: 100px;
    }
`;