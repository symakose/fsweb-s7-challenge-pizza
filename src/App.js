import React, { useState } from "react";
import OrderPizzaPage from "./components/OrderPizzaPage";
import OnayPizzaPage from "./components/OnayPizzaPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  const [yeniSiparis, setYeniSiparis] = useState();
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/onay">
            <OnayPizzaPage yeniSiparis={yeniSiparis} />
          </Route>
          <Route path="/pizza">
            <OrderPizzaPage setYeniSiparis={setYeniSiparis} />
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
