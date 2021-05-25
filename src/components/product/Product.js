import { Link } from "react-router-dom";
import React, { useContext } from "react";

//authentication context
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from '../buttons/HighlightButton';
import Progress from '../progress/Progress';

//styled components
import { Card } from './Product.styles';

function Product({title, desc, amount, current}) {
    const { authenticated } = useContext(Context);

    return (
        <Card>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Progress amount={amount} current={current}/>

            <Link to={authenticated ? "/donate" : "/signUp"}>
                <HighlightButton text={ "DOAR"}/>
            </Link>
        </Card>
    )
};

export default Product;
