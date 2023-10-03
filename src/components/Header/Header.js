import React from "react";
import "./Header.css";
import {
  phoneWhite,
  logo,
  logoBlack,
  phoneBlack,
} from "../../constants/constants";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  let header;

  if (
    location.pathname === "/services" ||
    location.pathname === "/photo-gallery" ||
    location.pathname === "/contacts" ||
    location.pathname === "/privacy-policy"
    
  ) {
    header = (
      <header className="header header-black">
        <div className="header__container header__container-black">
          <Link to="/" className="header__logo-container">
            <img src={logoBlack} className="header__logo" alt="Логотип" />
          </Link>
          <ul className="header__nav header__nav-black">
            <li className="header__nav-link">
              <a href="#about-company">
                <p className="header__link-text header__link-text-black">
                  О компании
                </p>
              </a>
            </li>
            <li className="header__nav-link">
              <Link to="/services">
                <p className="header__link-text header__link-text-black">
                  Услуги
                </p>
              </Link>
            </li>
            <li className="header__nav-link">
              <a href="#licenses">
                <p className="header__link-text header__link-text-black">
                  Лицензии
                </p>
              </a>
            </li>
            <li className="header__nav-link">
              <a href="#our-clients">
                <p className="header__link-text header__link-text-black">
                  Партнеры
                </p>
              </a>
            </li>
            <li className="header__nav-link">
              <Link to="/">
                <p className="header__link-text header__link-text-black">
                  Фотогалерея
                </p>
              </Link>
            </li>
            <li className="header__nav-link">
              <Link to="/contacts">
                <p className="header__link-text header__link-text-black">
                  Контакты
                </p>
              </Link>
            </li>
          </ul>
          <div className="header__container-phone">
            <img
              src={phoneBlack}
              className="header__container-phone-image"
              alt="Иконка телефона"
            />
            <p className="header__container-phone-text header__container-phone-text-black">
              <a
                href="tel:+7(495)-763-3470"
                className="header__container-phone-text-link header__container-phone-text-link-black"
              >
                +7 495 763-34-70
              </a>
            </p>
          </div>
        </div>
      </header>
    );
  } else {
    header = (
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo-container">
            <img src={logo} className="header__logo" alt="Логотип" />
          </Link>
          <ul className="header__nav">
            <li className="header__nav-link">
              <a href="#about-company">
                <p className="header__link-text">О компании</p>
              </a>
            </li>
            <li className="header__nav-link">
              <Link to="/services">
                <p className="header__link-text">Услуги</p>
              </Link>
            </li>
            <li className="header__nav-link">
              <a href="#licenses">
                <p className="header__link-text">Лицензии</p>
              </a>
            </li>
            <li className="header__nav-link">
              <a href="#our-clients">
                <p className="header__link-text">Партнеры</p>
              </a>
            </li>
            <li className="header__nav-link">
              <Link to="/photo-gallery">
                <p className="header__link-text">Фотогалерея</p>
              </Link>
            </li>
            <li className="header__nav-link">
              <Link to="/contacts">
                <p className="header__link-text">Контакты</p>
              </Link>
            </li>
          </ul>
          <div className="header__container-phone">
            <img
              src={phoneWhite}
              className="header__container-phone-image"
              alt="Иконка телефона"
            />
            <p className="header__container-phone-text">
              <a
                href="tel:+7(495)-763-3470"
                className="header__container-phone-text-link"
              >
                +7 495 763-34-70
              </a>
            </p>
          </div>
        </div>
      </header>
    );
  }

  return header;
}

export default Header;
