import styled from "styled-components";

export const FooterContainer = styled.footer
`
    grid-area: footer;
    background: var(--snow);
    display: flex;
    padding: 1em;
    align-items: space-between;
    justify-items: center;
`;

export const Lists = styled.div
`
    display: flex; 
    width: 60%;
    align-items: center;
    justify-content: space-around;

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        list-style-type: none;

        li{
            color: var(--black);
            margin-top: .3rem;
        }
    }
`;

export const Signature = styled.div
`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;