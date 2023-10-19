import React from "react";
import "./OurServices.css";
import "../../index.css";
import { HashLink } from "react-router-hash-link";
import {
  metalProcessing,
  sketches,
  turningWorks,
  milling,
  electricalDischargeMachining,
  laserCutting,
  hardening,
  weldingOfVariousMetals,
  arcWelding,
  semiAutomaticWelding,
  argonWelding,
} from "../../constants/constants";

function OurServices({ onButtonClick }) {
  return (
    <section className="our-services">
      <div className="our-services__container">
        <h2 className="section-title our-services__container-title">
          Наши услуги
        </h2>
        <ul className="our-services__container-list">
          <HashLink
            to="/services#metal-processing-heading"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={metalProcessing}
                alt="Механическая обработка черных и цветных металлов"
              />
              <p className="our-services__container-text">
                Механическая обработка черных и цветных металлов
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#turning-works"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={turningWorks}
                alt="Изготовления деталей по чертежам и эскизам заказчика"
              />
              <p className="our-services__container-text">
                Изготовления деталей по чертежам и эскизам заказчика
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#sketches"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={sketches}
                alt="Токарные работы"
              />
              <p className="our-services__container-text">Токарные работы</p>
            </li>
          </HashLink>
          <HashLink
            to="/services#milling"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={milling}
                alt="Фрезерование деталей любой сложности"
              />
              <p className="our-services__container-text">
                Фрезерование деталей любой сложности
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#electrical-discharge-machining"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={electricalDischargeMachining}
                alt="Электроэрозионная обработка"
              />
              <p className="our-services__container-text">
                Электроэрозионная обработка
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#laser-cutting"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={laserCutting}
                alt="Лазерная резка металлов"
              />
              <p className="our-services__container-text">
                Лазерная резка металлов
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#hardening"
            className="our-services__container-link"
            onClick={() => onButtonClick("Металлообработка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={hardening}
                alt="Закалка изделий из металла"
              />
              <p className="our-services__container-text">
                Закалка изделий из металла
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#welding-of-various-metals"
            className="our-services__container-link"
            onClick={() => onButtonClick("Сварка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={weldingOfVariousMetals}
                alt="Сварка различных металлов и их сплавов"
              />
              <p className="our-services__container-text">
                Сварка различных металлов и их сплавов
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#arc-welding"
            className="our-services__container-link"
            onClick={() => onButtonClick("Сварка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={arcWelding}
                alt="Ручная дуговая сварка"
              />
              <p className="our-services__container-text">
                Ручная дуговая сварка
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#semi-automatic-welding"
            className="our-services__container-link"
            onClick={() => onButtonClick("Сварка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={semiAutomaticWelding}
                alt="Полуавтоматическая сварка"
              />
              <p className="our-services__container-text">
                Полуавтоматическая сварка
              </p>
            </li>
          </HashLink>
          <HashLink
            to="/services#argon-welding"
            className="our-services__container-link"
            onClick={() => onButtonClick("Сварка")}
          >
            <li className="our-services__container-item">
              <img
                className="our-services__container-icon"
                src={argonWelding}
                alt="Аргонная сварка"
              />
              <p className="our-services__container-text">Аргонная сварка</p>
            </li>
          </HashLink>
        </ul>
      </div>
    </section>
  );
}

export default OurServices;
