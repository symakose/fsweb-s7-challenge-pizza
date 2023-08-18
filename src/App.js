import React from "react";
import OrderPizzaPage from "./components/OrderPizzaPage";
import OnayPizzaPage from "./components/OnayPizzaPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/onay">
            <OnayPizzaPage />
          </Route>
          <Route path="/pizza">
            <OrderPizzaPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
