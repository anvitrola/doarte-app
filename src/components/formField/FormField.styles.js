import styled from "styled-components";

export const Label = styled.label`
  font-family: "Rubik", sans-serif;
  color: var(--blue);
  width: 85%;
  text-align: left;
  margin: 1rem 0 10px 0;
  font-size: 16px;
`;

export const Input = styled.input`
  border-radius: 18px;
  margin-bottom: 0.5rem;
  color: var(--black);
  font-size: 15px;
  width: 90%;
  padding: 0.5rem;
  border: 2px solid var(--bronze);

  @media (max-width: 767px) {
    width: 50%;
  }
`;
