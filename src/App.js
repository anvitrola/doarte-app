import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//CSS global files
import {AppBody} from './styles/App.styles';
import './styles/global.css';

//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import AdForm from './components/adForm/AdForm';
import FloatingDiv from "./components/floatingDiv/FloatingDiv";
import ProductDashboard from "./components/productDashboard/ProductDashboard";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  	return (
    	<Router>
    		<AppBody>
        		<Header/>

				<Switch>
					<Route exact path="/">
              			<MainContent/>
						<FloatingDiv/>
            		</Route>

					<Route path="/signIn">
              			<AdForm/>
            		</Route>

					<Route  path="/signUp">
              			<AdForm signUp={true}/>
            		</Route>

					<Route path="/fundraisings">
						<ProductDashboard/>
					</Route>

					<Route path="/profile">
						<UserProfile/>
					</Route>

				</Switch>

				<Footer/>
      		</AppBody>
    	</Router>
  	);
}

export default App;
