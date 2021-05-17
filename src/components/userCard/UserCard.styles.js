import styled from 'styled-components';

export const Card = styled.div
`
    width: 50%;
    height: 60vh;
    margin: 0 auto;
    background: var(--white);
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Name = styled.h4
`
    font-weight: 600;
    color: var(--black);
`;

export const Review = styled.p
`
    color: var(--black);
    text-align: center;
    line-height: 1.5rem;
`;