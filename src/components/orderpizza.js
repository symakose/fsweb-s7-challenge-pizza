import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import Errorsfind from "./errorsfind";
import Form from "./form";

const malzemelerimiz = [
  "Pepperoni",
  "Biber",
  "Domates",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Patlıcan",
  "Kaşar",
  "Tavuk",
  "Jalepeno",
  "Mantar",
  "Soğan",
  "Sarımsak",
];

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "İsim 2 karakterden daha uzun olmalıdır.")
    .required("İsim bilgisi mutlaka girilmelidir."),
  adres: Yup.string()
    .min(2, "Adres uzunluğu yetersiz.")
    .required("Adres bilgilerinizi girmediniz."),
  boyutSec: Yup.string().mixed().oneOf(["buyuk", "orta", "kucuk"]),
  kalinlik: Yup.string()
    .oneOf(["ince", "kalın"], "Kalınlık seçeneği ince veya kalın olmalıdır.")
    .required("Lütfen bir kalınlık seçeneği seçin"),
  ekMalzemeler: Yup.mixed().oneOf([malzemelerimiz]),
  siparisAdedi: Yup.number().min(1, "Siparişiniz en az 1 adet olmalıdır."),
  notlar: Yup.string(),
});

function OrderPizza() {
  const [yeniSiparis, setYeniSiparis] = useState();
  const [ekMalzemeData, setEkMalzemeData] = useState();

  const [checkboxForm, setCheckboxForm] = useState({
    ekMalzemeler: [],
  });
  const [formData, setFormData] = useState({
    name: "",
    adres: "",
    boyutSec: "",
    kalinlik: "",
    ekMalzemeler: "",
    siparisAdedi: 0,
    notlar: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    adres: "",
    boyutSec: "",
    kalinlik: "",
    ekMalzemeler: "",
    siparisAdedi: "",
    notlar: "",
  });

  const [checkErrors, setCheckErrors] = useState({
    ekMalzemeler: [],
  });

  const checkFormErrors = (name, value) => {
    Yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setCheckErrors({
          ...checkErrors,
          [name]: "",
        });
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setCheckErrors({
          ...checkErrors,
          [name]: err.errors[0],
        });
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (checked !== undefined) {
      const { ekMalzemeler } = checkboxForm;
      setCheckboxForm({
        ...checkboxForm,
        [name]: checked
          ? [...ekMalzemeler, value]
          : ekMalzemeler.filter((item) => item !== value),
      });
    } else {
      checkFormErrors(name, value);
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const yeniCheckbox = { ekMalzemeler: checkboxForm.ekMalzemeler };

    const yeniSiparisler = {
      name: formData.name,
      adres: formData.adres,
      boyutSec: formData.boyutSec,
      kalinlik: formData.kalinlik,
      ekMalzemeler: formData.ekMalzemeler,
      siparisAdedi: formData.siparisAdedi,
      notlar: formData.notlar,
    };

    axios
      .post("https://reqres.in/api/orders", { yeniCheckbox, yeniSiparisler })
      .then((resp) => {
        console.log("Sipariş Detayları : ", resp.data.yeniSiparisler);
        console.log(
          "Pizza İçin Ek Malzemeler : ",
          resp.data.yeniCheckbox.ekMalzemeler
        );
        console.log("İsim Soyisim : ", resp.data.yeniSiparisler.name);
        console.log("Adres : ", resp.data.yeniSiparisler.adres);
        console.log(
          "Pizza Kalınlığı Seçiniz : ",
          resp.data.yeniSiparisler.kalinlik
        );
        console.log("Pizza Boyutu : ", resp.data.yeniSiparisler.boyutSec);
        console.log("Notlar : ", resp.data.yeniSiparisler.notlar);
        console.log("Sipariş Adeti : ", resp.data.yeniSiparisler.siparisAdedi);
        console.log(
          yeniCheckbox.ekMalzemeler.map(
            (index, key) => ` ${key + 1}.Ek Malzemeler : ${index} `
          )
        );
        setYeniSiparis(resp.data.yeniSiparisler);
        setEkMalzemeData(resp.data.yeniCheckbox);
        setCheckboxForm({
          ekMalzemeler: [],
        });
        setFormData({
          name: "",
          adres: "",
          boyutSec: "",
          kalinlik: "",
          notlar: "",
          siparisAdedi: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="Container">
        <h3>Sipariş Oluştur</h3>
        <hr />
        <Errorsfind errors={errors} />
        <form onSubmit={handleSubmit} id="pizza-form">
          <Form
            disabled={disabled}
            handleChange={handleChange}
            malzemelerimiz={malzemelerimiz}
            formData={formData}
          />
        </form>

        <div>
          {yeniSiparis && (
            <div className="alertSiparis">
              <p>Pizza'nız Hazırlanıyor!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderPizza;
