import styled from 'styled-components';

export const Card = styled.div
`
    grid-area: prod;
    width: 300px;
    height: 522px;
    border-radius: 10px;
    background: linear-gradient(to bottom, var(--bronze) 1%, var(--snow) 30%);
    border: 1px solid var(--orange);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`