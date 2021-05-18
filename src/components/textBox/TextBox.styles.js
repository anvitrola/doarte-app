import styled from 'styled-components';

export const TextContainer = styled.div
`
    grid-area: text;
    align-self: center;
    padding: .3rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

export const Title = styled.h1
`
    text-align: left;
    margin-bottom: 1rem;
    font-size: ${props => props.main ? "50px" : "35px"};
    font-weight: ${props => props.main ? "700" : "500"};
    font-family: 'Montserrat', sans-serif;
`;

export const Subtitle = styled.h3
`
    color: var(--gray);
    font-weight: 400;
`;