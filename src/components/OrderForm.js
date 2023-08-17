import React from "react";
import { useHistory } from "react-router-dom/";
import { Input, Label, FormGroup, Button, Form as RSForm } from "reactstrap";

function OrderForm({
  malzemelerimiz,
  formData,
  handleChange,
  disabled,
  handleSubmit,
}) {
  const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const yeniSiparisler = {};

  //   axios
  //     .post("https://reqres.in/api/orders", { yeniSiparisler })
  //     .then((res) => {
  //       history.push("/OnayPizzaPage");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <RSForm className="formBilgileri">
      <FormGroup className="kutucuk">
        <Label htmlFor="name" className="isimBilgi">
          <b>İsim Soyisim</b>
        </Label>
        <Input
          type="text"
          className="label"
          id="isimBilgi"
          value={formData.name}
          name="name"
          onChange={handleChange}
          placeholder="Lütfen isminizi belirtiniz."
        />
      </FormGroup>

      {/* Adres için div oluştur. */}

      <FormGroup className="adresBilgi">
        <Label htmlFor="adres" className="adresBilgi">
          <b>Adres</b>
        </Label>
        <Input
          type="text"
          className="label"
          id="adresBilgi"
          name="adres"
          value={formData.adres}
          onChange={handleChange}
          placeholder="Lütfen adres bilgilerinizi belirtiniz."
        />
      </FormGroup>
      {/* Boyut bilgisi için div oluştur. */}
      <FormGroup className="boyutBilgi">
        <Label htmlFor="boyutSec" className="boyutBilgi">
          <b>Pizza Boyutu Seçiniz</b>
        </Label>
        <Input
          type="select"
          id="boyutSec"
          name="boyutSec"
          value={formData.boyutSec}
          onChange={handleChange}
        >
          <option value="" disabled>
            Pizza Boyutu Seçiniz
          </option>
          <option value="kucuk">Küçük</option>
          <option value="orta">Orta</option>
          <option value="buyuk">Büyük</option>
        </Input>
      </FormGroup>
      {/* Kalınlık bilgisi için div oluştur. */}
      <FormGroup className="kalinlikBilgi">
        <Label>
          <b>Pizza Kalınlığını Seçiniz</b>
        </Label>
        <div className="hamurKalinlik">
          <Label check>
            <Input
              type="radio"
              name="kalinlik"
              value="ince"
              checked={formData.kalinlik === "ince"}
              onChange={handleChange}
            />
            İnce
          </Label>
        </div>
        <div>
          <Label check>
            <Input
              type="radio"
              name="kalinlik"
              value="kalın"
              onChange={handleChange}
              checked={formData.kalinlik === "kalın"}
            />
            Kalın
          </Label>
        </div>
      </FormGroup>
      {/* Ek Malzemeler için div oluştur */}
      <FormGroup>
        <Label>
          <b>Ek Malzemeler</b>
        </Label>
        <div className="ekMalzemelerBilgi">
          {malzemelerimiz.map((index, key) => (
            <div key={key}>
              <Label check>
                <Input
                  type="checkbox"
                  name="ekMalzemeler"
                  value={index}
                  onChange={handleChange}
                />
                {index}
              </Label>
            </div>
          ))}
        </div>
      </FormGroup>
      {/* Notlar için div oluştur */}
      <FormGroup className="formBilgileri notlarBilgi">
        <Label htmlFor="notlar" className="notlarBilgi">
          <b>Notlar</b>
        </Label>
        <Input
          className="label"
          type="text"
          placeholder="Siparişe eklemek istediğiniz bir şey var mı?"
          id="notlar"
          name="notlar"
          value={formData.notlar}
          onChange={handleChange}
        />
      </FormGroup>
      {/* Sipariş Adedi için div oluştur */}
      <FormGroup>
        <Label htmlFor="adetBilgi">
          <b>Sipariş Adedi</b>
        </Label>
        <Input
          className="label"
          type="number"
          id="adetBilgi"
          name="siparisAdedi"
          placeholder="0"
          value={formData.siparisAdedi}
          onChange={handleChange}
        />
      </FormGroup>
      {/* Siparişi Oluşturun butonu */}
      <div>
        <Button
          type="submit"
          id="submit"
          className="button"
          disabled={disabled}
          onClick={() => {
            handleSubmit();
            history.push("/OnayPizzaPage");
          }}
        >
          Siparişi Oluştur
        </Button>
      </div>
    </RSForm>
  );
}

export default OrderForm;
