import React from "react";
import "./OurServices.css";
import "../../index.css";
import { Link } from "react-router-dom";
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

function OurServices() {
  return (
    <div className="our-services">
      <div className="our-services__container">
        <h2 className="section-title our-services__container-title">
          Наши услуги
        </h2>
        <ul className="our-services__container-list">
          <li className="our-services__container-item">
            <HashLink
              to="/services#metal-processing-heading"
              className="our-services__container-link"
            >
              <img
                className="our-services__container-icon"
                src={metalProcessing}
                alt="Механическая обработка черных и цветных металлов"
              />
              <p className="our-services__container-text">
                Механическая обработка черных и цветных металлов
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <HashLink to="/services#turning-works" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={turningWorks}
                alt="Изготовления деталей по чертежам и эскизам заказчика"
              />
              <p className="our-services__container-text">
                Изготовления деталей по чертежам и эскизам заказчика
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <HashLink to="/services#sketches" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={sketches}
                alt="Токарные работы"
              />
              <p className="our-services__container-text">Токарные работы</p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <HashLink to="/services#milling" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={milling}
                alt="Фрезерование деталей любой сложности"
              />
              <p className="our-services__container-text">
                Фрезерование деталей любой сложности
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <HashLink to="/services#electrical-discharge-machining" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={electricalDischargeMachining}
                alt="Электроэрозионная обработка"
              />
              <p className="our-services__container-text">
                Электроэрозионная обработка
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <HashLink to="/services#laser-cutting" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={laserCutting}
                alt="Лазерная резка металлов"
              />
              <p className="our-services__container-text">
                Лазерная резка металлов
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <HashLink
              to="/services#hardening"
              className="our-services__container-link"
            >
              <img
                className="our-services__container-icon"
                src={hardening}
                alt="Закалка изделий из металла"
              />
              <p className="our-services__container-text">
                Закалка изделий из металла
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <Link to="" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={weldingOfVariousMetals}
                alt="Сварка различных металлов и их сплавов"
              />
              <p className="our-services__container-text">
                Сварка различных металлов и их сплавов
              </p>
            </Link>
          </li>
          <li className="our-services__container-item">
            <HashLink to="/services#arc-welding" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={arcWelding}
                alt="Ручная дуговая сварка"
              />
              <p className="our-services__container-text">
                Ручная дуговая сварка
              </p>
            </HashLink>
          </li>
          <li className="our-services__container-item">
            <Link to="" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={semiAutomaticWelding}
                alt="Полуавтоматическая сварка"
              />
              <p className="our-services__container-text">
                Полуавтоматическая сварка
              </p>
            </Link>
          </li>
          <li className="our-services__container-item">
            <Link to="" className="our-services__container-link">
              <img
                className="our-services__container-icon"
                src={argonWelding}
                alt="Аргонная сварка"
              />
              <p className="our-services__container-text">Аргонная сварка</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurServices;
