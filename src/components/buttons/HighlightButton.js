import styled from 'styled-components';

const Button = styled.button
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
`

function HighlightButton({text, primary}) {
    return (
        <Button primary={primary}>
            {text}
        </Button>
    )
}

export default HighlightButton
