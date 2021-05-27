import React, { useContext, useState, useEffect } from "react";

//authentication context
import { Context } from "../../contexts/AuthContext";

//services
import { getUser } from './../../services/userServices';

//components
import CustomCarousel from "../customCarousel/CustomCarousel";
import Product from "../product/Product";
import TextBox from "../textBox/TextBox";

//images
import CircleImage from "../../images/circle.png";

//styled components
import { Main, Products, Highlights, LinkBox } from './GenericDashboard.styles';
import HighlightButton from "../buttons/HighlightButton";
import ProductExhi from "../productExhi/ProductExhi";

function GenericDashboard() {
    const { authenticated, userID } = useContext(Context);

    const [user, setUser] = useState({
        name:"Default",
        amount_money:0
    });


    useEffect(() => {
        async function fetchUser() {
            setUser(await getUser());
        }
        fetchUser();    
    }, []);

    return (
        <Main>
            <TextBox 
            title={!authenticated 
                ? "Doarte: A arte de doar." 
                : `Bem vindo de volta, ${user.name}!`
            } 
            subtitle={"Gentileza gera gentileza"}/>

            <LinkBox to={authenticated ? `/create/${userID}` : "/signUp"}>
                <HighlightButton primary={true} text={authenticated ? "Criar vaquinha" : "Cadastre-se"}/>
            </LinkBox>

            <img 
            src={CircleImage} 
            alt="Logo do site, um círculo formado por mãos, girando."/>

            <Highlights>
                {authenticated ? (
                    <ProductExhi isPublic={false}/>
                ) : (
                    <CustomCarousel>
                        <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                        <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                        <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    </CustomCarousel>
                )}
            </Highlights>

            <Products>
                <h2>Outros projetos</h2>
                <CustomCarousel>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                </CustomCarousel>
            </Products>
        </Main>
    )
};

export default GenericDashboard;
