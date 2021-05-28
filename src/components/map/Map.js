//components
import TextBox from "../textBox/TextBox";
import Mapicture from "../../images/mappoints.png";

//styled components
import { Container } from "./Map.styles";

function Map() {
  return (
    <Container>
      <TextBox
        title={"Onde estamos?"}
        subtitle={"Impactando pessoas ao redor do mundo"}
      />

      <img src={Mapicture} alt="Mapa mundi em tom bege" />
    </Container>
  );
}

export default Map;
