import styled from "styled-components";

export const Container = styled.div
`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f0d4a3;
  border-radius: 18px;
  margin: 10px;
  padding: .3rem;

  button {
    border: none;
    background: none;
    text-align: center;
    border-radius: 18px;
    color: var(--gray);
    font-size: 15px;
    padding: 0.5rem;
    width: 70%;
  }

  img{
    width: 5%;
    margin: 0;
  }
`;