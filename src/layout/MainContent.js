import React from "react";
import OrderPizzaPage from "../components/OrderPizzaPage";

const MainContent = () => {
  return (
    <>
      <div className="main-header">
        <div className="baslik">
          <p>Position Absolute Acı Pizza</p>
          <div className="altbaslik">
            <h1>85.50 ₺</h1>
            <span> 4.9 (200)</span>
          </div>
          <p>
            Akşam yemeği, arkadaşlarla geçirilen keyifli anlar, partiler veya
            sadece kendinizle baş başa kalma anları... Pizza, her anın kahramanı
            olmaya adaydır. Uzun çalışma gününden sonra eve dönüp, sıcacık bir
            pizza dilimiyle ödüllendirilmek ne kadar güzeldir değil mi?
            Arkadaşlarınızla toplandığınızda ise, pizzaların çeşit çeşit
            renkleri ve lezzetleri sohbetlerinizi daha da keyifli kılar.Eğer siz
            de bu eşsiz lezzet şölenine katılmak ve damaklarınızı ödüllendirmek
            isterseniz, en yakın pizzacımıza uğrayın veya online sipariş verin.
            Lezzetin ve tutkunun buluştuğu bu eşsiz yemeği deneyimlemeye hazır
            olun. Unutmayın, pizza sadece bir yemek değil, bir yaşam tarzıdır.
            Lezzet dolu anlar ve pizza tutkusuyla dolu günler sizi bekliyor!
            Pizzanız "Teknolojik Yemekler" farkıyla eşsiz bir ana eşlik etsin!
          </p>
        </div>
        <OrderPizzaPage formData={formData} />
      </div>
    </>
  );
};

export default MainContent;
