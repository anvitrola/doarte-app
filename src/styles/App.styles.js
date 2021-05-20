import styled from 'styled-components';

export const AppBody = styled.div
`
	background: rgb(219,155,109);
	background: rgba(240, 212, 163, 1);
  	height: auto;
	grid-template-rows: 5rem auto auto 463px;
  	display: grid;
  	grid-template-areas: 
    	"header header"
    	"main main"
		"div div"
    	"footer footer";
`