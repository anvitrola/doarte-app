//components
import { useEffect, useState } from "react";
import Product from "../product/Product";
import TextBox from "../textBox/TextBox";

//api services
import { getUserProducts, getProducts } from "./../../services/productServices";

//styled components
import { Exhibition, Cards } from "./ProductExhi.styles";

function ProductExhi({ isPublic }) {
  const [products, setProducts] = useState([]);

 

  useEffect(() => {

    async function fetchUserProducts() {
      let data = [...(await getUserProducts())];
      setProducts(data);
    
    }

    async function fetchAllProducts() {
      let data = [...(await getProducts())];
      setProducts(data);
      
    }
    
    isPublic ? fetchAllProducts() : fetchUserProducts();
  },[]);

  return (
    <Exhibition>
      <TextBox
        title={
          isPublic
            ? "Algumas das causas que precisam de suporte"
            : "Suas vaquinhas"
        }
      />
      <Cards>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              id={product.id}
              desc={product.description}
              amount={product.goal_value}
              current={product.current_value}
              isPublic={isPublic ? true : false}
            />
          );
        })}
      </Cards>
    </Exhibition>
  );
}

export default ProductExhi;
