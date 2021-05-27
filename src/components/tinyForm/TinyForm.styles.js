import styled from 'styled-components';

export const Form = styled.form
`
    height: ${(props) => (props.smaller ? "3rem" : "10rem")};  
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    label{
        width: 93%;
    }
`;