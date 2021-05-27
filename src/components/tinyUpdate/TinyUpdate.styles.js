import styled from 'styled-components';

export const Form = styled.form
`
    width: 90%;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    label{
        width: 93%;
    }

    button{
        margin-top: 1rem;
    }
`;

export const DeleteButton = styled.button
`
    background: none;
    border: none;
    font-size: .8rem;
    color: var(--red);
    font-family: "Rubik", sans-serif;
`