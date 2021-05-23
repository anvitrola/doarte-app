import {Cards} from "./CardCarousel.styles";

import TextBox from "../textBox/TextBox";
import UserCard from "../userCard/UserCard";
import CustomCarousel from "../customCarousel/CustomCarousel";

function CardCarousel() {
  return (
    <Cards>
      <TextBox 
      title={"Quem já usou o Doarte"} 
      subtitle={"Confira algumas das personalidades influentes que confiam em nossa plataforma"}/>

      <CustomCarousel>
        <UserCard
          name={"Rafael Guarilha"}
          comment={"Lorem ipsilum. Morte ao itaú etc etcétera"}
          rate={4.5}
          location={"Rio de Janeiro, Brasil"}
        />
        <UserCard
          name={"Daniel Ferreira"}
          comment={"Lorem ipsilum. Morte ao itaú etc etcétera"}
          location={"Rio de Janeiro, Brasil"}
          rate={4.8}
        />
        <UserCard
          name={"Júlia Coutinho"}
          comment={"Lorem ipsilum. Morte ao itaú etc etcétera"}
          location={"Rio de Janeiro, Brasil"}
          rate={4.8}
        />
      </CustomCarousel>

    </Cards>
  );
}

export default CardCarousel;
