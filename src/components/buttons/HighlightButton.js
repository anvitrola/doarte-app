import { FancyButton } from './Buttons.styles';

function HighlightButton({text, primary, type}) {
    return (
        <FancyButton primary={primary} type={type}>
            {text}
        </FancyButton>
    )
};

export default HighlightButton;
