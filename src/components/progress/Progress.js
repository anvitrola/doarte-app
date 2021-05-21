import ProgressBar from "@ramonak/react-progress-bar";
import {Bar} from './Progress.styles';


function Progress({amount, current}) {

    const percent = (current * 100)/amount;

    return (
        <Bar>
            <h6>META: R${amount}</h6>
            <ProgressBar 
                completed={percent}
                bgColor={"var(--orange)"}
                margin={"1rem 0"}
                baseBgColor={"var(--bronze)"}
                labelAlignment={"outside"}
                labelColor={"var(--blue)"}
                borderRadius={"10px"}
            />
            <h6>Valor arrecadado: R${current}</h6>
        </Bar>
    )
}

export default Progress
