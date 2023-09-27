import React from "react";
import "./Licenses.css";
import "../../index.css";
import CarouselLicenses from "../CarouselLicenses/CarouselLicenses";
import certificate from "../../images/certificates/certificate.jpg";

function Licenses() {
  return (
    <section className="licenses">
      <div className="licenses__container">
        <h2 className="section-title licenses__title">
          Лицензии и сертификаты
        </h2>
        <CarouselLicenses>
          <li className="licenses__item">
            <img
              className="licenses__certificate-img"
              src={certificate}
              alt="Сертификат"
            />
          </li>
          <li className="licenses__item">
            <img
              className="licenses__certificate-img"
              src={certificate}
              alt="Сертификат"
            />
          </li>
          <li className="licenses__item">
            <img
              className="licenses__certificate-img"
              src={certificate}
              alt="Сертификат"
            />
          </li>
          <li className="licenses__item">
            <img
              className="licenses__certificate-img"
              src={certificate}
              alt="Сертификат"
            />
          </li>
          <li className="licenses__item">
            <img
              className="licenses__certificate-img"
              src={certificate}
              alt="Сертификат"
            />
          </li>
          <li className="licenses__item">
            <img
              className="licenses__certificate-img"
              src={certificate}
              alt="Сертификат"
            />
          </li>
        </CarouselLicenses>
      </div>
    </section>
  );
}

export default Licenses;
