import React, { useContext } from "react";

import { Context } from "../../contexts/AuthContext";

//components
import Product from "../product/Product";
import TextBox from "../textBox/TextBox";

//styled components
import { Exhibition, Cards } from "./ProductExhi.styles";

function ProductExhi({ main }) {
  const { authenticated } = useContext(Context);

  return (
    <Exhibition>
      <TextBox
        title={
          main ? "Algumas das causas que precisam de suporte" : "Suas vaquinhas"
        }
      />
      <Cards>
        <Product
          isUsers={authenticated}
          title={"S.O.S Maré"}
          desc={"loremloremlorem"}
          amount={1000}
          current={100}
        />
        <Product
          isUsers={authenticated}
          title={"S.O.S Maré"}
          desc={"loremloremlorem"}
          amount={1000}
          current={300}
        />
        <Product
          isUsers={authenticated}
          title={"S.O.S Maré"}
          desc={"loremloremlorem"}
          amount={1000}
          current={900}
        />
      </Cards>
    </Exhibition>
  );
}

export default ProductExhi;
