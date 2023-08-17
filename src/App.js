import React from "react";
import OrderPizzaPage from "./components/OrderPizzaPage";
import OnayPizzaPage from "./components/OnayPizzaPage";
import { Router, Switch, Route } from "react-router-dom/";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/pizza" component={OrderPizzaPage} />
          <Route path="/OnayPizzaPage" component={OnayPizzaPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
