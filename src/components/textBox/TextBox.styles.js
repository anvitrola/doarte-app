import styled from 'styled-components';

export const TextContainer = styled.div
`
    grid-area: text;
    align-self: center;
    padding: .3rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    @media (max-width: 768px) {
        width:100%;
        justify-content: flex-start;
    }
`;

export const Title = styled.h1
`
    text-align: left;
    margin-bottom: 1rem;
    font-size: ${props => props.main ? "50px" : "35px"};
    font-weight: ${props => props.main ? "700" : "500"};
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 768px) {
       font-size: 28px;;
    }
`;

export const Subtitle = styled.h3
`
    color: var(--gray);
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 15px;
        width:100%;
     }
`;