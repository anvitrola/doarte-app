import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import TextBox from "../textBox/TextBox";

import UserCard from "../userCard/UserCard";

const Cards = styled.section`
  grid-area: cards;
  justify-self: center;
  height: 80vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CardCarousel() {
  return (
    <Cards>
      <TextBox 
      title={"Quem usa?"} 
      subtitle={"Confira algumas das personalidades influentes que confiam em nossa plataforma"}/>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderButtonGroupOutside={true}
      >
      <UserCard
        name={"Rafael Guarilha"}
        comment={"Lorem ipsilum. Morte ao itaú etc etcétera"}
      />
      <UserCard
        name={"Daniel Ferreira"}
        comment={"Lorem ipsilum. Morte ao itaú etc etcétera"}
      />
      <UserCard
        name={"Júlia Coutinho"}
        comment={"Lorem ipsilum. Morte ao itaú etc etcétera"}
      />
      </Carousel>

    </Cards>
  );
}

export default CardCarousel;
