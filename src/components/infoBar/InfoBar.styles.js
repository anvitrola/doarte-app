import styled from 'styled-components';

export const InfoContainer = styled.div
`
    grid-area: infobar;
    justify-self: center;
    width: 100%;
    border-radius: 7px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const InfoDiv = styled.div
`
    padding: .3rem;
    display: flex;
    width: 33%;
    justify-content: center;
`;

export const TextDiv = styled.div
`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
`;

export const Text = styled.p
`
    color: var(--black);
    font: 400 20px 'Rubik', sans-serif;
`;