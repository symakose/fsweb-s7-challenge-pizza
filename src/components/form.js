import Raect from "react";

function Form({ malzemelerimiz, formData, handleChange, disabled }) {
  return (
    <>
      <div className="formBilgileri">
        <div className="kutucuk">
          <br />
          <label htmlFor="isimBilgi" className="isimBilgi">
            <b>İsim Soyisim</b>
          </label>
          <br />
          <input
            type="text"
            className="label"
            id="isimBilgi"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Lütfen isminizi belirtiniz."
          />
          <br />
        </div>

        {/*Adres için div oluştur.*/}

        <div className="formBilgileri">
          <label htmlFor="adresBilgi" className="adresBilgi">
            <b>Adres </b>
          </label>
          <br />
          <input
            type="text"
            className="label"
            id="adresBilgi"
            name="adres"
            value={formData.adres}
            onChange={handleChange}
            placeholder="Lütfen adres bilgilerinizi belirtiniz."
          />
          <br />
          <br />
        </div>

        {/*Boyut bilgisi için div oluştur.*/}
        <div className="boyutBilgi">
          <div>
            <b> Pizza Boyutunu Seçiniz</b>
          </div>
          <div className="boyutKucuk">
            <div>
              <label>
                <input
                  type="radio"
                  name="pizzaBoyut"
                  value="kucuk"
                  checked={formData.boyutSec === "kucuk"}
                  onChange={handleChange}
                />
                Küçük Boy
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="boyutSec"
                  value="orta"
                  onChange={handleChange}
                  checked={formData.boyutSec === "orta"}
                />
                Orta Boy
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="boyutSec"
                  value="buyuk"
                  onChange={handleChange}
                  checked={formData.boyutSec === "buyuk"}
                />
                Büyük Boy
              </label>
            </div>
          </div>
        </div>

        {/* Kalınlık bilgisi için div oluştur. */}

        <div className="kalinlikBilgi">
          <div>
            <b>Pizza Kalınlığını Seçiniz</b>
          </div>
          <div className="kalinlikInce">
            <label>
              <input
                type="radio"
                name="kalinlik"
                value="ince"
                checked={formData.kalinlik === "ince"}
                onChange={handleChange}
              />
              İnce
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="kalinlik"
                value="kalın"
                onChange={handleChange}
                checked={formData.kalinlik === "kalın"}
              />
              Kalın
            </label>
          </div>
        </div>

        {/* Ek Malzemeler için div oluştur */}
        <div>
          <label>
            <b>Ek Malzemeler</b>
            <div className="ekMalzemelerBilgi">
              {malzemelerimiz.map((index, key) => (
                <div key={key}>
                  <label>
                    <input
                      type="checkbox"
                      name="ekMalzemeler"
                      value={index}
                      onChange={handleChange}
                    />
                    {index}
                  </label>
                </div>
              ))}
            </div>
          </label>
        </div>

        {/* Notlar için div oluştur */}
        <div className="formBilgileri notlarBilgi">
          <br />
          <br />
          <label htmlFor="notlarBilgi" className="notlarBilgi">
            <b>Notlar</b>
          </label>
          <br />
          <input
            className="label"
            type="text"
            placeholder="Ekstra bilgiler için not bilgisi ekleyebilirsiniz."
            id="special-text"
            name="notlarBilgi"
            value={formData.notlar}
            onChange={handleChange}
          />
        </div>

        {/* Notlar için div oluştur */}

        <div className="formBilgileri">
          <label htmlFor="adetBilgi">
            <b>Sipariş Adedi</b>
          </label>
          <br />
          <input
            className="label"
            type="number"
            id="adetBilgi"
            name="adetBilgi"
            placeholder="0"
            value={formData.siparisAdedi}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="submit"
            id="submit"
            className="button"
            disabled={disabled}
            value="Siparişi Oluşturun"
          ></input>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Form;
