import styled from 'styled-components';

export const Container = styled.div
`
    width: 100%;
    grid-area: div;
    align-self: center;
    justify-self: center;
    background: linear-gradient(to bottom, var(--bronze) 50%, var(--snow) 50%);
    display: flex;
    justify-content: center;
    height:150px;
`
export const Div = styled.div
`
    align-items: center;
    justify-content: center;
    width: 59.5rem;
    height: 12.375rem;
    background: var(--white);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 80px;
    top: 2720px;
    border-radius: 10px;

    div{
        width: 50%;
    }
`