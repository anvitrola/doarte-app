import React, { useContext, useState, useEffect } from "react";

//authentication context
import { Context } from "../../contexts/AuthContext";

//services
import { getUser } from "./../../services/userServices";

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

  const [user, setUser] = useState({
    name: "Default",
    amount_money: 0,
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
        title={
          !authenticated
            ? "Doarte: A arte de doar."
            : `Bem vindo de volta, ${localStorage.getItem("Username")}!`
        }
        subtitle={"Gentileza gera gentileza"}
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
        {authenticated ? <ProductExhi isPublic={false} /> : <ProductExhi isPublic={true} />}
      </Highlights>

      <Products>
        <h2>Outros projetos</h2>
        <ProductExhi isPublic={true} />
      </Products>
    </Main>
  );
}

export default GenericDashboard;
