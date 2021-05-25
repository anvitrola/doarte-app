import styled from "styled-components";
import HighlightButton from "../buttons/HighlightButton";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const Form = styled.form`
  width: 600px;
  height: 800px;
  border-radius: 10px;
  background: var(--white);
<<<<<<< HEAD
  padding: 10px;
=======
  padding: 2rem 1rem;
>>>>>>> 9d5dc5d38ccbb06066adc67839a7fec38e1c7dbd
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
<<<<<<< HEAD

  h4 {
    margin: 10px;
  }

  h3 {
    margin: 2rem;
    color: var(--black);
  }

  label{
    width: 85%;
    text-align: left;
    margin-top: 15px;
    padding: 2px;
  }

  img {
    width: 130px;
    margin-bottom: 1.5rem;
  }

  button {
    color: var(--white);
    font-size: 16px;
    background-color: var(--orange);
    height: 40px;
    border: 0;
    border-radius: 18px;
    width: 50%;
    margin-top: 2.5rem;
  }

  a {
    margin: 0.5rem 0;
  }

  a,
  h6 {
    color: var(--blue-link);
=======
  
  a, h6 {
    color: #3e9ec8;
>>>>>>> 9d5dc5d38ccbb06066adc67839a7fec38e1c7dbd
    padding: 10px;
    border-radius: 18px;
    font: 500 12px "Rubik", sans-serif;
    width: 90%;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }

<<<<<<< HEAD
  input {
    height: 35px;
    border-radius: 18px;
    padding: 0 20px;
    color: #777;
    font-size: 18px;
    width: 90%;
    border: 2px solid var(--bronze);
  }

=======
>>>>>>> 9d5dc5d38ccbb06066adc67839a7fec38e1c7dbd
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 50%;
  }

<<<<<<< HEAD
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--bronze);
    border-radius: 18px;
    width: 90%;
    margin: 10px;
  }

  .icon {
    width: 7%;
    margin: 0;
    padding: 0.3rem;
  }

  .checkbox {
    font-size:12px;
  }

 
  
  @media (max-width: 768px) {
    max-width: 90%;

    button {
      width: 55%;
    }
    input {
      width: 100%;
    }
  }
=======
  @media (max-width: 768px) {
		max-width: 90%;
    button {
      width: 55%;
    }
    input {
      width: 100%;
    }
	}
`;

export const SubmitButton = styled(HighlightButton)`
  color: var(--white);
  font-size: 16px;
  background: var(--orange);
  height: 20px;
  border: 0;
  border-radius: 18px;
  width: 40%;
  margin-top: 2rem;
`;

export const Logo = styled.img
`
  width: 120px; 
`;

export const Fields = styled.div
`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
>>>>>>> 9d5dc5d38ccbb06066adc67839a7fec38e1c7dbd
`;
