import { Router} from "react-router-dom";

//history track
import history from './history';

//Auth
import { AuthProvider } from "./contexts/AuthContext";

//CSS global files
import { AppBody } from "./styles/App.styles";
import "./styles/global.css";


//Global Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <AppBody>
          <Header />

          <Routes/>

          <Footer />
        </AppBody>
      </Router>
  //  </AuthProvider>
  );
}

export default App;
