import ProgressBar from 'react-customizable-progressbar';
import {Bar} from './Progress.styles';

const progressBar = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    width: "100px",
    height: "100%",
    margin: "0 auto",
    userSelect: "none"
}

function Progress({amount, current}) {
    return (
        <Bar>
            <h6>Meta: {amount}</h6>
            <div>
            </div>
            <h6>Valor atual: {current}</h6>
        </Bar>
    )
}

export default Progress
