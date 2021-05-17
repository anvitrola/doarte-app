import {FancyButton} from './Buttons.styles';

function HighlightButton({text, primary}) {
    return (
        <FancyButton primary={primary}>
            {text}
        </FancyButton>
    )
}

export default HighlightButton
