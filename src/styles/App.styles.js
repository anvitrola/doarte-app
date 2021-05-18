import styled from 'styled-components';

export const AppBody = styled.div
`
	background: rgb(219,155,109);
	background: linear-gradient(0deg, rgba(219,155,109,1) 35%, rgba(255,255,255,1) 100%);
  	height: auto;
	grid-template-rows: 5rem auto 6rem;
  	display: grid;
  	grid-template-areas: 
    	"header header"
    	"main main"
    	"footer footer";
  	grid-gap: 1.5rem;
`