import { FooterContainer, Lists, Signature } from "./Footer.styles";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
import Logo from "../../images/circule-logo.png";
function Footer() {
  return (
    <FooterContainer>
      <Signature>
        <img src={Logo} alt={"Logo da Doarte. A palavra escrita normalmente, mas a letra 'O' é um círculo formado por mãos que se apoiam."}/>
        <p>
          A ideia central da Doarte é unir causas e projetos que precisam de um
          intermediário competente e integro{" "}
        </p>
        <section>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.7rem" }}>
            <FaFacebook />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.7rem" }}>
            <FaInstagram />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.7rem"}}>
            <FaTwitter />
          </IconContext.Provider>
        </section>
      </Signature>

      <Lists>
        <ul>
          <h4>MAPA</h4>
          <li>Inicio</li>
          <li>Cadastrar</li>
          <li>Recuperar senha</li>
          <li>Explorar</li>
          <li>Quem somos</li>
          <li>Dicas</li>
        </ul>

        <ul>
          <h4>LEGAL</h4>
          <li>Termos do Participante</li>
          <li>Termos do Doador</li>
        </ul>

        <ul>
          <h4>CONTATO</h4>
          <li>instituto@doarte.com</li>
          <li>(21) 2224-3336</li>
        </ul>
      </Lists>
    </FooterContainer>
  );
}

export default Footer;
