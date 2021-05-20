import {Card} from './Product.styles';
import HighlightButton from '../buttons/HighlightButton';
import Progress from '../progress/Progress';

function Product({title, desc, amount, current}) {
    return (
        <Card>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Progress amount={amount} current={current}/>
            <HighlightButton text={"Doar"}/>
        </Card>
    )
}

export default Product
