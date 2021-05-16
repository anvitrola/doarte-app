import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/header/Header';

import './styles/global.css';
import MainContent from './components/mainContent/MainContent';

const AppBody = styled.div
`
	background: rgb(219,155,109);
	background: linear-gradient(0deg, rgba(219,155,109,1) 35%, rgba(255,255,255,1) 100%);
  	height: auto;
	grid-template-rows: 5rem auto 50px;
  	display: grid;
  	grid-template-areas: 
    	"header header"
    	"main main"
    	"footer footer";
  	grid-gap: 10px;
`

function App() {
  	return (
    	<Router>
    		<AppBody>
        		<Header/>

				<Switch>
					<Route exact path="/">
              			<MainContent/>
            		</Route>

				</Switch>

      		</AppBody>
    	</Router>
  	);
}

export default App;
