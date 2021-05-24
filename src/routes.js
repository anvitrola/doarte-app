import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//checking if there is a token with our key
import { Context } from "./contexts/AuthContext";

//components to render
import MainContent from "./components/mainContent/MainContent";
import AdForm from "./components/adForm/AdForm";
import FloatingDiv from "./components/floatingDiv/FloatingDiv";
import ProductDashboard from "./components/productDashboard/ProductDashboard";
import UserProfile from "./components/userProfile/UserProfile";

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

const Routes = () => (
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

    <PrivateRoute path={`/profile`} component={() => <UserProfile />} />

    <Route path="/signIn" component={() => <AdForm />} />

    <Route path="/signUp" component={() => <AdForm signUp={true} />} />

    <Route path="/explore" component={() => <ProductDashboard />} />

    <Route exact path="*" component={() => <h1>404: Page not found</h1>} />
  </Switch>
);

export default Routes;
