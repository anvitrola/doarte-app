import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

//contexts
import { IconContext } from "react-icons";

//authentication context
import { Context } from "../../contexts/AuthContext";

//components
import HighlightButton from '../buttons/HighlightButton';
import Progress from '../progress/Progress';
import ModalTemplate from "../modal/Modal";
import TinyUpdate from "../tinyUpdate/TinyUpdate";
import TinyForm from "../tinyForm/TinyForm";

//styled components
import { Card, EditBox, ShowFormButton } from './Product.styles';

function Product({title, desc, amount, current, isUsers}) {
    const { authenticated } = useContext(Context);
    const [edit, setEdit] = useState(false);

    function showForm (){
        setEdit(true)
    }

    function closeForm(){
        setEdit(false)
    }

    return (
        <Card>
            {authenticated && isUsers && (
                <EditBox>
                    <ShowFormButton onClick={!edit ? showForm : closeForm}>
                        <IconContext.Provider value={{ color: "var(--blue)", size: "1.5rem"}}>
                            {!edit ? <FiEdit/> : <GrClose/>}
                        </IconContext.Provider>
                    </ShowFormButton>
                </EditBox>
            )}

            {authenticated && edit && (<TinyUpdate/>)}

            {!edit &&  (
            <>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Progress amount={amount} current={current}/>
            </>
            )}

            {!authenticated && (
                <Link to="/signUp">
                    <HighlightButton text={ "DOAR"}/>
                </Link>
            )}

            {authenticated && !edit && !isUsers && (
                <ModalTemplate text={"DOAR"}>
                    <TinyForm/>
                </ModalTemplate>
            )}

        </Card>
    )
};

export default Product;
