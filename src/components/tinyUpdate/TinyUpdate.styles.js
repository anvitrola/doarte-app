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
    color: var(--white);
    font-family: "Rubik", sans-serif;
    width: 150px;
    height: 2rem;
    border: none;
    border-radius: 50px;
    background: var(--red);
}
`