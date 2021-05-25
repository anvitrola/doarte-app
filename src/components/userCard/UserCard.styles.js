import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  margin: 10px auto;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 90%;
  }

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 50px;
    border-radius: 50%;
    margin: 5px 9px 10px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 70%;

    h4 {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 15px;
      color: var(--black);
    }

    h6 {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: var(--blue);
    }
  }
  
  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

export const Review = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: var(--black);
  line-height: 30px;
`;

export const Rate = styled.h6`
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
`;
