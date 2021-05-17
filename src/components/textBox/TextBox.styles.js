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
    color: var(--black);
    text-align: left;
    margin-bottom: 1rem;
    font-size: ${props => props.main ? "3rem" : "2.3rem"};
`;

export const Subtitle = styled.h3
`
    color: var(--black);
    font-weight: 400;
`;