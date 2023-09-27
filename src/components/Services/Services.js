import React from "react";
import "./Services.css";
import "../../index.css";
import { Link } from "react-router-dom";
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

function Services() {
  return (
    <div className="services">
      <div className="services-container">
        <h2 className="section-title services-container__title">Наши услуги</h2>
        <ul className="services-container__list">
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={metalProcessing}
                alt="Механическая обработка черных и цветных металлов"
              />
              <p className="services-container__text">
                Механическая обработка черных и цветных металлов
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={turningWorks}
                alt="Изготовления деталей по чертежам и эскизам заказчика"
              />
              <p className="services-container__text">
                Изготовления деталей по чертежам и эскизам заказчика
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={sketches}
                alt="Токарные работы"
              />
              <p className="services-container__text">Токарные работы</p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={milling}
                alt="Фрезерование деталей любой сложности"
              />
              <p className="services-container__text">
                Фрезерование деталей любой сложности
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={electricalDischargeMachining}
                alt="Электроэрозионная обработка"
              />
              <p className="services-container__text">
                Электроэрозионная обработка
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={laserCutting}
                alt="Лазерная резка металлов"
              />
              <p className="services-container__text">
                Лазерная резка металлов
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={hardening}
                alt="Закалка изделий из металла"
              />
              <p className="services-container__text">
                Закалка изделий из металла
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={weldingOfVariousMetals}
                alt="Сварка различных металлов и их сплавов"
              />
              <p className="services-container__text">
                Сварка различных металлов и их сплавов
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={arcWelding}
                alt="Ручная дуговая сварка"
              />
              <p className="services-container__text">Ручная дуговая сварка</p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={semiAutomaticWelding}
                alt="Полуавтоматическая сварка"
              />
              <p className="services-container__text">
                Полуавтоматическая сварка
              </p>
            </Link>
          </li>
          <li className="services-container__item">
            <Link className="services-container__link">
              <img
                className="services-container__icon"
                src={argonWelding}
                alt="Аргонная сварка"
              />
              <p className="services-container__text">Аргонная сварка</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
