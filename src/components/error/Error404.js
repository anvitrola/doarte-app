import React from "react";
import {Link} from "react-router-dom";
import Page404 from "../../images/404page.png";
import HighlightButton from "../buttons/HighlightButton";
import Page from "./Error404.styles";

const Error404 = () => {
  return (
    <Page>

      <img src={Page404} alt="mensagem de Error404 página não encontrada"></img>
     <Link to="/"><HighlightButton primary={true} text={"Voltar para a Página inicial"} /></Link> 
    </Page>
  );
};

export default Error404;
