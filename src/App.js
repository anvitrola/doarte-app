import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/header/Header';
import SignIn from './components/signIn/SignIn'
import './styles/global.css';
import MainContent from './components/mainContent/MainContent';
import SignUp from './components/signUp/signUp';

const AppBody = styled.div
`
	background: rgb(219,155,109);
	background: linear-gradient(0deg, rgba(219,155,109,1) 35%, rgba(255,255,255,1) 100%);
	
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
					<Route exact path="/signIn">
              			<SignIn/>
            		</Route>
					<Route exact path="/signUp">
              			<SignUp />
            		</Route>

				</Switch>

      		</AppBody>
    	</Router>
  	);
}

export default App;
