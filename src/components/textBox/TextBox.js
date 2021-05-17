import styled from 'styled-components';

const TextContainer = styled.div
`
    grid-area: text;
    align-self: center;
    padding: .3rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

`
const Title = styled.h1
`
    color: var(--black);
    text-align: left;
    margin-bottom: 1rem;
    font-size: ${props => props.main ? "3rem" : "2.3rem"};

`
const Subtitle = styled.h3
`
    color: var(--black);
    font-weight: 400;
`

function TextBox({title, subtitle, main}) {
    return (
        <TextContainer>
            <Title main={main}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
    )
}

export default TextBox
