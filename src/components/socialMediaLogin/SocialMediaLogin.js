//images
import Github from "../../images/githubimg.png";
import Microsoft from "../../images/microsoftimg.png";
import Google from "../../images/googleimg.png";

//styled components
import { Socials, Container } from "./SocialMediaLogin.styles";

function SocialMediaLogin() {
  return (
    <Container>
      <Socials>
        <img src={Google} alt="Mini ícone da logomarca da empresa Google" />
        <button>Conectar com o Google</button>
      </Socials>

      <Socials>
        <img
          src={Microsoft}
          alt="Mini ícone da logomarca da empresa Microsoft"
        />
        <button>Conectar com a Microsoft</button>
      </Socials>

      <Socials>
        <img src={Github} alt="Mini ícone da logomarca da empresa GitHub" />
        <button>Conectar com o Github</button>
      </Socials>
    </Container>
  );
}

export default SocialMediaLogin;
