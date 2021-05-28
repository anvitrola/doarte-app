import ProgressBar from "@ramonak/react-progress-bar";

//styled component
import { Bar } from './Progress.styles';

function Progress({amount, current}) {
    const percent = Math.floor((current * 100)/amount);

    return (
        <Bar>
            <ProgressBar 
                completed={percent}
                bgColor={"var(--orange)"}
                margin={"1rem 0"}
                baseBgColor={"var(--bronze)"}
                labelAlignment={"outside"}
                labelColor={"var(--blue)"}
                borderRadius={"10px"}
            />
            <h6>arrecadado: R${current}</h6>
            <h6>META: R${amount}</h6>

        </Bar>
    )
};

export default Progress;
