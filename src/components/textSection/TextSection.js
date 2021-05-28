//components
import TextBox from "../textBox/TextBox";
import ProList from "../proList/ProList";

//image
import Picture from "../../images/image09.png";

//styled components
import { TextContainer } from "./TextSection.styles";

function TextSection() {
  return (
    <TextContainer>
      <img
        src={Picture}
        alt="Contorno de cor preta de uma personagem de aparência feminina"
      />
      <TextBox
        title={"Vantagens Doarte"}
        subtitle={"Fique por dentro de nossos benefícios exclusivos."}
      />
      <ProList />
    </TextContainer>
  );
}

export default TextSection;
