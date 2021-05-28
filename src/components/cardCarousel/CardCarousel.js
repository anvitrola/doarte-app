//components
import TextBox from "../textBox/TextBox";
import UserCard from "../userCard/UserCard";
import CustomCarousel, { responsive } from "../customCarousel/CustomCarousel";

//images
import Augusto from "../../images/augusto.jpeg";
import Daniel from "../../images/daniel.jpeg";
import Julia from "../../images/julia.jpg";
import Rafael from "../../images/rafael.jpg";

//styled components
import { Cards } from "./CardCarousel.styles";

function CardCarousel() {
  return (
    <Cards>
      <TextBox
        title={"Quem já usou o Doarte"}
        subtitle={
          "Confira algumas das personalidades influentes que confiam em nossa plataforma"
        }
      />

      <CustomCarousel responsive={responsive.mobile}>
        <UserCard
          photo={Augusto}
          name={"Augusto Lins"}
          comment={
            "Minha experiência na Doarte foi incrível. A capanha de democratização das maquininhas de cartão de crédito mobilizou diversos empreendedores, foi um sucesso."
          }
          rate={4.5}
          location={"Rio de Janeiro, Brasil"}
        />
        <UserCard
          photo={Daniel}
          name={"Daniel Ferreira"}
          comment={
            "O meu projeto `Jovem Elixir` que ajuda jovens das periferias a conhecer sobre programação funcional e conseguir uma vaga no mercado tech, tem sido um sucesso, graças a doarte."
          }
          location={"São Paulo, Brasil"}
          rate={4.8}
        />
        <UserCard
          photo={Julia}
          name={"Júlia Coutinho"}
          comment={
            "Criei uma campanha para uma instituição no Natal e consegui superar a meta em poucos dias. Tudo foi muito fácil, rápido e seguro para todos que doaram. E a ação foi um sucesso!”"
          }
          location={"Espirito Santo, Brasil"}
          rate={4.8}
        />
        <UserCard
          photo={Rafael}
          name={"Rafael Guarilha"}
          comment={
            "Tive uma ótima experiência com a doarte, minha campanha 'morte ao itaú',moveu diversos indgnados a um super projeto open-source de desburocratização e redução de taxas."
          }
          location={"Rio de Janeiro, Brasil"}
          rate={4.8}
        />
      </CustomCarousel>
    </Cards>
  );
}

export default CardCarousel;
