import React from "react";
import Form1 from "./components/Form1";
import orderpizza from "./Orderpizza";

const App = () => {
  return (
    <>
      <header>
        <h1>Teknolojik Yemekler</h1>
        <div className="header-links">
          <a href="#">Ana Sayfa - </a>
          <a href="#">Seçenekler - </a>
          <a href="#">Siparişi Oluştur</a>
        </div>
      </header>

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
        <Form1 formData={formData} />
      </div>
    </>
  );
};

export default App;
