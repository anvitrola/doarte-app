import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;

  img {
    width: 75%;
    margin: 2rem 0;
  }

  a {
    margin: 4rem 18rem 4rem 0;
  }

  @media (max-width: 767px) {
    align-items: center;

    img {
      width: 80%;
    }
    a {
      margin: 2rem 1rem 1rem 1rem;
    }
  }
`;

export default Page;
