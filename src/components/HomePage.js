import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HomePage = () => {
  return (
    <div id="HomePage1">
      <h2> KOD ACIKTIRIR</h2>
      <h2> PİZZA, DOYURUR</h2>
      <Link to="/pizza">
        <Button id="order-pizza">ACIKTIM</Button>
      </Link>
    </div>
  );
};

export default HomePage;
