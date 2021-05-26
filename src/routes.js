import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//checking if there is a token with our key
import { Context } from "./contexts/AuthContext";

//components to render
import MainContent from "./components/mainContent/MainContent";
import AdForm from "./components/adForm/AdForm";
import FloatingDiv from "./components/floatingDiv/FloatingDiv";
import GenericDashboard from "./components/genericDashboard/GenericDashboard";
import FormArea from "./components/formArea/FormArea";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};


const Routes = () => {
    const { userID } = useContext(Context);
    return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <>
            <MainContent />
            <FloatingDiv />
          </>
        )}
      />

      <PrivateRoute
        path={`/profile/${userID}`}
        component={() => <FormArea profile={true} />}
      />

      <PrivateRoute path={`/create/${userID}`} component={() => <FormArea />} />

      <Route path="/signIn" component={() => <AdForm />} />

      <Route path="/signUp" component={() => <AdForm signUp={true} />} />

      <Route path="/explore" component={() => <GenericDashboard />} />

      <Route exact path="*" component={() => <h1>404: Page not found</h1>} />
    </Switch>
  );
};

export default Routes;
