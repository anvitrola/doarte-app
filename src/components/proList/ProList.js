import { IconContext } from "react-icons";

//icons
import { FaCheckCircle } from "react-icons/fa";

//styled components
import { List, Item, Text } from "./ProList.styles";

function ProList() {
  return (
    <List>
      <Item>
        <IconContext.Provider value={{ color: "green", size: "1.5rem" }}>
          <FaCheckCircle />
        </IconContext.Provider>
        <Text>Ganhe 1000 moedas ao se cadastrar</Text>
      </Item>
      <Item>
        <IconContext.Provider value={{ color: "green", size: "1.5rem" }}>
          <FaCheckCircle />
        </IconContext.Provider>
        <Text>Cadastro simples. Sem burocracia</Text>
      </Item>
      <Item>
        <IconContext.Provider value={{ color: "green", size: "1.5rem" }}>
          <FaCheckCircle />
        </IconContext.Provider>
        <Text>Garantimos sua segurança</Text>
      </Item>
      <Item>
        <IconContext.Provider value={{ color: "green", size: "1.5rem" }}>
          <FaCheckCircle />
        </IconContext.Provider>
        <Text>Código aberto à comunidade</Text>
      </Item>
    </List>
  );
}

export default ProList;
