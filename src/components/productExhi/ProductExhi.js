import { useEffect, useState } from "react";

//components
import Product from "../product/Product";
import TextBox from "../textBox/TextBox";

//api services
import { getUserProducts, getProducts } from "./../../services/productServices";

//styled components
import { Exhibition, Cards, NoContent } from "./ProductExhi.styles";

function ProductExhi({ isPublic, isMain }) {
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

  const publicHighlight = products.slice(0, 3);

  return (
    <Exhibition>
      {isPublic && isMain && (
        <TextBox title={"Algumas causas que precisam de suporte"} />
      )}

      {!isPublic && <TextBox title={"Suas vaquinhas"} />}

      {!isMain ? (
        <Cards>
          {products.length === 0 ? (
            <NoContent>
              Poxa! Parece que você não possui nenhuma vaquinha ainda. Crie uma
              e inicie uma causa em prol de algum bem coletivo ao seu redor!
            </NoContent>
          ) : (
            products.map((product) => {
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
            })
          )}
        </Cards>
      ) : (
        <Cards>
          {publicHighlight.map((product) => {
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
      )}
    </Exhibition>
  );
}

export default ProductExhi;
