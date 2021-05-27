import { Link } from "react-router-dom";
import React, { useContext } from "react";

//authentication context
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from '../buttons/HighlightButton';
import Progress from '../progress/Progress';
import ModalTemplate from "../modal/Modal";
import TinyForm from "../tinyForm/TinyForm";

//styled components
import { Card } from './Product.styles';

function Product({title, id, desc, amount, current, isPublic}) {
    const { authenticated } = useContext(Context);

    return (
        <Card>
            <div id={String(id)}></div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Progress amount={amount} current={current}/>

            {!authenticated && isPublic &&(
                <Link to="/signUp">
                    <HighlightButton text={ "DOAR"}/>
                </Link>
            )}

            {authenticated && isPublic &&(
                <ModalTemplate text={"DOAR"}>
                    <TinyForm id={id}/>
                </ModalTemplate>
            )}

        </Card>
    )
};

export default Product;
