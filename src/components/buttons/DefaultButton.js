import { CommonButton } from './Buttons.styles';

function DefaultButton({text, primary}) {
    return (
        <CommonButton primary={primary}>
            {text}
        </CommonButton>
    )
};

export default DefaultButton;
