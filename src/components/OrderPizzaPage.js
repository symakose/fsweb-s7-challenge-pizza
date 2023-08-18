import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import Errorsfind from "./ErrorsFind";
import OrderForm from "./OrderForm";
import { useHistory } from "react-router-dom";

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
  boyutSec: Yup.string().oneOf(["buyuk", "orta", "kucuk"]),
  kalinlik: Yup.string()
    .oneOf(["ince", "kalın"], "Kalınlık seçeneği ince veya kalın olmalıdır.")
    .required("Lütfen bir kalınlık seçeneği seçin"),
  ekMalzemeler: Yup.array()
    .max(10, "En fazla 10 malzeme seçmelisiniz.")
    .min(4, "En az 4  malzeme seçmelisiniz."),
  siparisAdedi: Yup.number().min(1, "Siparişiniz en az 1 adet olmalıdır."),
  notlar: Yup.string(),
});

function OrderPizzaPage() {
  const [yeniSiparis, setYeniSiparis] = useState();
  const [ekMalzemeData, setEkMalzemeData] = useState({ ekMalzemeler: [] });
  const [formData, setFormData] = useState({
    name: "",
    adres: "",
    boyutSec: "",
    kalinlik: "",
    ekMalzemeler: [],
    siparisAdedi: 0,
    notlar: "",
  });
  const history = useHistory();

  const [errors, setErrors] = useState({
    name: "",
    adres: "",
    boyutSec: "",
    kalinlik: "",
    ekMalzemeler: "",
    siparisAdedi: "",
    notlar: "",
  });

  // const [checkErrors, setCheckErrors] = useState({
  //   ekMalzemeler: [],
  // });

  const checkFormErrors = async (name, value) => {
    try {
      await Yup.reach(schema, name).validate(value);

      setErrors({
        ...errors,
        [name]: "",
      });
    } catch (err) {
      setErrors({
        ...errors,
        [name]: err.errors[0],
      });
    }
  };

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log("handleChange", name, value, checked);
    if (type == "checkbox") {
      const updatedEkMalzemeler = checked
        ? [...formData.ekMalzemeler, value]
        : formData.ekMalzemeler.filter((item) => item !== value);

      console.log("handleChange", name, value, checked);
      setFormData({
        ...formData,
        ekMalzemeler: updatedEkMalzemeler,
      });
      checkFormErrors(name, updatedEkMalzemeler);
    } else {
      console.log("handleChange", name, value, checked);
      checkFormErrors(name, value);
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const yeniSiparisler = {
    //   name: formData.name,
    //   adres: formData.adres,
    //   boyutSec: formData.boyutSec,
    //   kalinlik: formData.kalinlik,
    //   ekMalzemeler: formData.ekMalzemeler,
    //   siparisAdedi: formData.siparisAdedi,
    //   notlar: formData.notlar,
    // };

    axios
      // .post("https://reqres.in/api/orders", yeniSiparisler)
      .then((resp) => {
        console.log("Sipariş Detayları : ", resp.data.yeniSiparisler);
        console.log("İsim Soyisim : ", resp.data.yeniSiparisler.name);
        console.log("Adres : ", resp.data.yeniSiparisler.adres);
        console.log(
          "Pizza Kalınlığı Seçiniz : ",
          resp.data.yeniSiparisler.kalinlik
        );
        console.log("Pizza Boyutu : ", resp.data.yeniSiparisler.boyutSec);
        console.log("Notlar : ", resp.data.yeniSiparisler.notlar);
        console.log("Sipariş Adeti : ", resp.data.yeniSiparisler.siparisAdedi);
        console.log("Ek Malzemeler : ", resp.data.yeniSiparisler.ekMalzemeler);

        setYeniSiparis(resp.data.yeniSiparisler);
        setEkMalzemeData({ ekMalzemeler: [] });
        setFormData({
          name: "",
          adres: "",
          boyutSec: "",
          kalinlik: "",
          notlar: "",
          siparisAdedi: 0,
          ekMalzemeler: [],
        });
        history.push("/onay");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Container">
      <h3>Sipariş Oluştur</h3>
      <br />
      <br />
      <Errorsfind errors={errors} />

      <OrderForm
        formData={formData}
        malzemelerimiz={malzemelerimiz}
        handleChange={handleChange}
        disabled={disabled}
        handleSubmit={handleSubmit}
      />

      <div>
        {yeniSiparis && (
          <div className="alertSiparis">
            <p>Pizza'nız Hazırlanıyor!</p>
            <p>
              Sipariş Detayları: {yeniSiparis.name}, {yeniSiparis.adres},{" "}
              {yeniSiparis.boyutSec}, {yeniSiparis.kalinlik},
              {yeniSiparis.siparisAdedi}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderPizzaPage;
