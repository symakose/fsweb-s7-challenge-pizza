import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      <div className="header-links">
        <a href="#">Ana Sayfa - </a>
        <a href="#">Seçenekler - </a>
        <a href="#">Siparişi Oluştur</a>
      </div>
      <OrderPizzaPage formData={formData} />
    </header>
  );
};

export default Header;
