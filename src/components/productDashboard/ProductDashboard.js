import CustomCarousel from "../customCarousel/CustomCarousel";
import Picture from "../../images/16.png";
import Product from "../product/Product";

import {Main, Products, Highlights} from './ProductDashboard.styles';
import TextBox from "../textBox/TextBox";

function ProductDashboard() {
    return (
        <Main>
            <TextBox title={"Doarte: A arte de doar."} subtitle={"Gentileza gera gentileza"}/>
            <img src={Picture} alt="Contorno de cor preta de dois personagens juntos, um de aparência masculina e outro de aparência feminina, que aparentam estar conversando."/>
            <Highlights>
                <CustomCarousel>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                </CustomCarousel>
            </Highlights>
            <Products>
                <CustomCarousel>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                    <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                </CustomCarousel>
            </Products>
        </Main>
    )
}

export default ProductDashboard
