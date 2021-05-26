import { CommonButton } from './Buttons.styles';

function DefaultButton({text, type, primary, clickEvent}) {
    return (
        <CommonButton type={type} primary={primary} onClick={clickEvent}>
            {text}
        </CommonButton>
    )
};

export default DefaultButton;
