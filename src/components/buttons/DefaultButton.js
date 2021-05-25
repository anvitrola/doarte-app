import { CommonButton } from './Buttons.styles';

function DefaultButton({text, primary, clickEvent}) {
    return (
        <CommonButton primary={primary} onClick={clickEvent}>
            {text}
        </CommonButton>
    )
};

export default DefaultButton;
