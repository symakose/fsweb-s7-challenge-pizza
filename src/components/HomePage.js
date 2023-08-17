import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HomePage = () => {
  return (
    <div id="HomePage1">
      <img src={require("../images/logo.svg")} alt="logo" />
      <h2> KOD ACIKTIRIR</h2>
      <h2> PİZZA, DOYURUR</h2>
      <Link to="/pizza">
        <Button id="order-pizza">ACIKTIM</Button>
      </Link>
    </div>
  );
};

export default HomePage;
