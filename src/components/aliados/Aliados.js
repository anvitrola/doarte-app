//components
import TextBox from "../textBox/TextBox";
import HighlightButton from "../buttons/HighlightButton";

//styled components
import { Container, Section, Stone, Resilia } from "./Aliados.styles";

//images
import logoResilia from "../../images/resilia2.png";
import logoStone from "../../images/stone.png";

function Aliados() {
  return (
    <Container>
      <Section>
        <Resilia
          src={logoResilia}
          alt="Contorno de cor preta de dois personagens juntos, um de aparência masculina e outro de aparência feminina, que aparentam estar conversando."
        />
        <TextBox
          subtitle={
            "A Resilia é uma escola de hábitos de sucesso, onde o aluno aprende as competências comportamentais e técnicas mais exigidas em profissionais de sucesso atualmente e ainda recebe todo o apoio para se inserir no mercado de trabalho em apenas 6 meses.Com foco em diversidade, formamos jovens talentos através de uma metodologia inovadora, mentoria e programas empresariais que garantem profissionais preparados para os desafios da área de tecnologia. Para dar acesso a uma educação de qualidade para mais pessoas, temos como modelo de pagamento o ISA, no qual o aluno só paga quando for contratado."
          }
          main={true}
        />

        <a target="_blank" rel="noreferrer" href="https://www.resilia.work/">
          <HighlightButton
            text={"Conhecer"}
            position={"button"}
            primary={true}
          />
        </a>
      </Section>
      <Section>
        <Stone
          src={logoStone}
          alt="Contorno de cor preta de dois personagens juntos, um de aparência masculina e outro de aparência feminina, que aparentam estar conversando."
        />
        <TextBox
          subtitle={
            "Muito mais que uma maquininha no balcão.          A Stone acredita que o desenvolvimento de um dono de negócio é o desenvolvimento de toda a economia. Acreditamos que apenas entregar a nossa máquina na mão de um lojista não é o suficiente. Acreditamos que é preciso mudar a maneira como os donos de negócio são tratados, além das relações entre todo o mercado de pagamentos."
          }
          main={true}
        />

        <a target="_blank" rel="noreferrer" href="https://www.stone.com.br/">
          <HighlightButton
            text={"Conhecer"}
            position={"button"}
            primary={true}
          />
        </a>
      </Section>
    </Container>
  );
}

export default Aliados;
