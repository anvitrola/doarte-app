import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//CSS global files
import {AppBody} from './styles/App.styles';
import './styles/global.css';

//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import AdForm from './components/AdForm/AdForm';

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
              			<AdForm/>
            		</Route>

					<Route  path="/signUp">
              			<AdForm signUp={true}/>
            		</Route>
				</Switch>

				<Footer/>
      		</AppBody>
    	</Router>
  	);
}

export default App;
