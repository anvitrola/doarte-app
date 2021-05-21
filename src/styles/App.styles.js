import styled from 'styled-components';

export const AppBody = styled.div
`
	background: linear-gradient(to bottom, var(--bronze) 20%, var(--snow) 50%, var(--bronze) 70%, var(--bronze) 100%);
  	height: auto;
	grid-template-rows: 5rem auto auto 463px;
  	display: grid;
  	grid-template-areas: 
    	"header header"
    	"main main"
		"div div"
    	"footer footer";
`