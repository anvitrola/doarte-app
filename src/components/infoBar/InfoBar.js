import { InfoContainer, InfoDiv, TextDiv, Text } from "./InfoBar.styles";

import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiDonateHeart } from "react-icons/bi";

function InfoBar() {
  return (
    <InfoContainer>
      <InfoDiv>
        <IconContext.Provider
          value={{ color: "var(--orange)", size: "1.7rem" }}
        >
          <FaUserCircle />
        </IconContext.Provider>
        <TextDiv>
          <Text>
            <b>90+</b>
          </Text>
          <Text>usuários</Text>
        </TextDiv>
      </InfoDiv>

      <InfoDiv>
        <IconContext.Provider
          value={{ color: "var(--orange)", size: "1.7rem" }}
        >
          <GoLocation />
        </IconContext.Provider>
        <TextDiv>
          <Text>
            <b>20+</b>
          </Text>
          <Text>estados</Text>
        </TextDiv>
      </InfoDiv>

      <InfoDiv>
        <IconContext.Provider
          value={{ color: "var(--orange)", size: "1.7rem" }}
        >
          <BiDonateHeart />
        </IconContext.Provider>
        <TextDiv>
          <Text>
            <b>50+</b>
          </Text>
          <Text>causas</Text>
        </TextDiv>
      </InfoDiv>
    </InfoContainer>
  );
}

export default InfoBar;
