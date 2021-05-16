import React from 'react';
import styled from 'styled-components';

const Button = styled.button
`
    width: 150px;
    height: 2rem;
    border: ${props => props.primary ? "none" : "1px solid var(--orange)"};
    border-radius: 30px;
    background: ${props => props.primary  ? "var(--orange)" : "transparent"};
    padding: .3rem;
    color: ${props => props.primary ? "var(--white)" : "var(--black)"};
`
function DefaultButton({text, primary}) {
    return (
        <Button primary={primary}>
            {text}
        </Button>
    )
}

export default DefaultButton
