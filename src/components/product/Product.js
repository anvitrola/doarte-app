import {Card} from './Product.styles';
import HighlightButton from '../buttons/HighlightButton';

function ProductCard({title, desc}) {
    return (
        <Card>
            <h3>{title}</h3>
            <p>{desc}</p>
            <HighlightButton text={"Doar"}/>
        </Card>
    )
}

export default ProductCard
