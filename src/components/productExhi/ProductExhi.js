import Product from "../product/Product";
import TextBox from "../textBox/TextBox";
import { Exhibition, Cards } from "./ProductExhi.styles";

function ProductExpo() {
    return (
        <Exhibition>
            <TextBox title={"Algumas das causas que precisam de suporte"}/>
            <Cards>
                <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={100}/>
                <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={300}/>
                <Product title={"S.O.S Maré"} desc={"loremloremlorem"} amount={1000} current={900}/>
            </Cards>
        </Exhibition>
    )
}

export default ProductExpo
