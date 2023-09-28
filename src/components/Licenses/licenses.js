import React from "react";
import "./Licenses.css";
import "../../index.css";
import LicensesCarousel from "../LicensesCarousel/LicensesCarousel";
import LicensePopup from "../LicensePopup/LicensePopup";
import {
  certificateFirst,
  certificateSecond,
  certificateThird,
  certificateFourth,
  certificateFifth,
  certificateSixth,
} from "../../constants/constants";

function Licenses({
  isPopupImageOpen,
  imageSrc,
  imageAlt,
  onOpenPopupLicense,
  onClosePopupLicense,
}) {
  return (
    <section className="licenses">
      <div className="licenses__container">
        <h2 className="section-title licenses__title">
          Лицензии и сертификаты
        </h2>
        <LicensesCarousel>
          <li
            className="licenses__item"
            onClick={() =>
              onOpenPopupLicense(certificateFirst, "Выписка из реестра")
            }
          >
            <img
              className="licenses__certificate-img"
              src={certificateFirst}
              alt="Выписка из реестра"
            />
          </li>
          <li
            className="licenses__item"
            onClick={() =>
              onOpenPopupLicense(certificateSecond, "Выписка из реестра")
            }
          >
            <img
              className="licenses__certificate-img"
              src={certificateSecond}
              alt="Выписка из реестра"
            />
          </li>
          <li
            className="licenses__item"
            onClick={() =>
              onOpenPopupLicense(certificateThird, "Выписка из реестра")
            }
          >
            <img
              className="licenses__certificate-img"
              src={certificateThird}
              alt="Выписка из реестра"
            />
          </li>
          <li
            className="licenses__item"
            onClick={() =>
              onOpenPopupLicense(certificateFourth, "Полис страхования")
            }
          >
            <img
              className="licenses__certificate-img"
              src={certificateFourth}
              alt="Полис страхования"
            />
          </li>
          <li
            className="licenses__item"
            onClick={() =>
              onOpenPopupLicense(certificateFifth, "Декларация о соответствии")
            }
          >
            <img
              className="licenses__certificate-img"
              src={certificateFifth}
              alt="Декларация о соответствии"
            />
          </li>
          <li
            className="licenses__item"
            onClick={() =>
              onOpenPopupLicense(certificateSixth, "Сертификат соответствия")
            }
          >
            <img
              className="licenses__certificate-img"
              src={certificateSixth}
              alt="Сертификат соответствия"
            />
          </li>
        </LicensesCarousel>
      </div>

      {isPopupImageOpen && (
        <LicensePopup
          onClose={onClosePopupLicense}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
        />
      )}
    </section>
  );
}

export default Licenses;
