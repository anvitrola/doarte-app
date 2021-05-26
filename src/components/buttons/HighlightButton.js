import { FancyButton } from './Buttons.styles';

function HighlightButton({text, primary, type, clickEvent}) {
    return (
        <FancyButton primary={primary} type={type} onClick={clickEvent}>
            {text}
        </FancyButton>
    )
};

export default HighlightButton;
