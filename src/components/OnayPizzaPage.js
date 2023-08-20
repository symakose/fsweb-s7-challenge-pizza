import React from "react";
import { Link } from "react-router-dom/";
import { Button } from "reactstrap";

function OnayPizzaPage({ yeniSiparis }) {
  return (
    <div id="OnayPizzaPage1">
      <div id="siparisAlindi">
        {yeniSiparis ? (
          <div className="alertSiparis">
            <h2>Tebrikler! Siparişiniz Alındı.</h2>
            <p>Pizza'nız Hazırlanıyor!</p>
            <p>
              Sipariş Detayları: {yeniSiparis.name}, {yeniSiparis.adres},{" "}
              {yeniSiparis.boyutSec}, {yeniSiparis.kalinlik},
              {yeniSiparis.siparisAdedi}
            </p>
            <Link to="/">Anasayfa</Link>
          </div>
        ) : (
          <p>
            Henüz Sipariş Vermnediniz. <Link to="/pizza">sıparıs ver</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default OnayPizzaPage;
