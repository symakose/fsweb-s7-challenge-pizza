import React from "react";

function ErrorsFind({ errors }) {
  return (
    <>
      <div className="errors">
        <div id="errName">{errors.name}</div>
        <div id="errAdress">{errors.adres}</div>
        <div id="errboyutSec">{errors.boyutSec}</div>
        <div id="errkalinlik">{errors.kalinlik}</div>
        <div id="errsiparisAdedi">{errors.siparisAdedi}</div>
        <div id="errnotlar">{errors.notlar}</div>
      </div>
    </>
  );
}

export default ErrorsFind;
