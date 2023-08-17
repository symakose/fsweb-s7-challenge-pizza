import React from "react";
import { Link } from "react-router-dom/";
import { Button } from "reactstrap";

function OnayPizzaPage() {
  return (
    <div id="OnayPizzaPage1">
      <div id="siparisAlindi">
        <h2>Tebrikler! Siparişiniz Alındı.</h2>
        <Link to="/">
          <Button id="anasayfayaDon">Anasayfa</Button>
        </Link>
      </div>
    </div>
  );
}

export default OnayPizzaPage;
