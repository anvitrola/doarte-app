import { TextContainer, Title, Subtitle } from "./TextBox.styles";

function TextBox({ title, subtitle, main }) {
  return (
    <TextContainer>
      <Title main={main}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TextContainer>
  );
}

export default TextBox;
