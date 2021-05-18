import styled from 'styled-components';

export const AppBody = styled.div
`
	background: rgb(219,155,109);
	background: rgba(240, 212, 163, 1);
  	height: auto;
	grid-template-rows: 5rem auto 463px;
  	display: grid;
  	grid-template-areas: 
    	"header header"
    	"main main"
    	"footer footer";
  	grid-gap: 1.5rem;
`