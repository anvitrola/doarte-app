import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//CSS global files
import {AppBody} from './styles/App.styles';
import './styles/global.css';

//Components
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  	return (
    	<Router>
    		<AppBody>
        		<Header/>

				<Switch>
					<Route exact path="/">
              			<MainContent/>
            		</Route>

					<Route path="/signIn">
              			<SignIn/>
            		</Route>

					<Route  path="/signUp">
              			<SignUp/>
            		</Route>
				</Switch>

      		</AppBody>
    	</Router>
  	);
}

export default App;
