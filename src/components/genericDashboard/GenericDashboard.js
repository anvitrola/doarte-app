import React, { useContext, useEffect } from "react";

//authentication context
import { Context } from "../../contexts/AuthContext";

//components
import TextBox from "../textBox/TextBox";

//images
import CircleImage from "../../images/circle.png";

//styled components
import { Main, Products, Highlights, LinkBox } from "./GenericDashboard.styles";
import HighlightButton from "../buttons/HighlightButton";
import ProductExhi from "../productExhi/ProductExhi";

function GenericDashboard() {
  const { authenticated} = useContext(Context);


  useEffect(() => {
    localStorage.getItem("Username");
  }, []);

  return (
    <Main>
      <TextBox
        title={
          !authenticated
            ? "Doarte: A arte de doar."
            : `Bem vindo(a), ${localStorage.getItem("Username")}!`
        }
        subtitle={
          "O Doarte surgiu da crença que atitudes individuais podem impactar, imensamente, no coletivo. Você pode ser a mudança que gostaria de ver no mundo e estar aqui é um passo para esse objetivo."
        }
      />

      <LinkBox to={authenticated ? `/create` : "/signUp"}>
        <HighlightButton
          primary={true}
          text={authenticated ? "Criar vaquinha" : "Cadastre-se"}
        />
      </LinkBox>

      <img
        src={CircleImage}
        alt="Logo do site, um círculo formado por mãos, girando."
      />

      <Highlights>
        {authenticated ? <ProductExhi isPublic={false} /> : <ProductExhi isPublic={true} isMain={true} />}
      </Highlights>

      <Products>
        <h2>Outros projetos</h2>
        <ProductExhi isPublic={true} />
      </Products>
    </Main>
  );
}

export default GenericDashboard;
