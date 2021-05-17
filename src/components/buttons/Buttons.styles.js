import styled from 'styled-components';

export const CommonButton = styled.button
`
    width: 150px;
    height: 2rem;
    border: ${props => props.primary ? "none" : "1px solid var(--orange)"};
    border-radius: 30px;
    background: ${props => props.primary  ? "var(--orange)" : "transparent"};
    padding: .3rem;
    color: ${props => props.primary ? "var(--white)" : "var(--black)"};
`;

export const FancyButton = styled.button
`
    width: 200px;
    grid-area: button;
    height: 2.3rem;
    box-shadow: 5px -5px var(--white);
    border: ${props => props.primary ? "none" : "1px solid var(--orange)"};
    border-radius: 5px;
    background: ${props => props.primary  ? "var(--orange)" : "transparent"};
    padding: .3rem;
    color: ${props => props.primary ? "var(--white)" : "var(--black)"};

    &:hover{
        color: var(--orange);
        background-color: var(--white);
        border: 1px solid var(--orange);
    }
`;
