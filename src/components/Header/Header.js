import React, { useState } from "react";
import "./Header.css";
import {
  phoneWhite,
  logo,
  logoBlack,
  phoneBlack,
} from "../../constants/constants";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "../NavBar/NavBar";

function Header() {
  const location = useLocation();
  const [navBarState, setNavBarState] = useState(false);

  const openNavBar = () => {
    setNavBarState(true);
    document.body.style.overflow = "hidden";
  };

  const closeNavBar = () => {
    setNavBarState(false);
    document.body.style.overflow = "auto";
  };

  let header;

  if (
    location.pathname === "/services" ||
    location.pathname === "/photo-gallery" ||
    location.pathname === "/contacts" ||
    location.pathname === "/privacy-policy" ||
    location.pathname === "/personal-data-processing-policy"
  ) {
    header = (
      <>
        {navBarState && <NavBar onClose={closeNavBar} />}
        <header className="header header-black">
          <div className="header__container header__container-black">
            <Link to="/" className="header__logo-container border-black">
              <img src={logoBlack} className="header__logo" alt="Логотип" />
            </Link>
            <ul className="header__nav header__nav-black">
              <li className="header__nav-link">
                <HashLink to="/#about-company">
                  <p className="header__link-text header__link-text-black">
                    О компании
                  </p>
                </HashLink>
              </li>
              <li
                className={`header__nav-link ${
                  location.pathname === "/services"
                    ? "header__nav-link-active"
                    : ""
                }`}
              >
                <Link to="/services">
                  <p
                    className={`header__link-text ${
                      location.pathname === "/services"
                        ? "header__link-text-active"
                        : "header__link-text-black"
                    }`}
                  >
                    Услуги
                  </p>
                </Link>
              </li>
              <li className="header__nav-link">
                <HashLink to="/#licenses">
                  <p className="header__link-text header__link-text-black">
                    Лицензии
                  </p>
                </HashLink>
              </li>
              <li className="header__nav-link">
                <HashLink to="/#our-clients">
                  <p className="header__link-text header__link-text-black">
                    Партнеры
                  </p>
                </HashLink>
              </li>
              <li
                className={`header__nav-link ${
                  location.pathname === "/photo-gallery"
                    ? "header__nav-link-active"
                    : ""
                }`}
              >
                <Link to="/photo-gallery">
                  <p
                    className={`header__link-text ${
                      location.pathname === "/photo-gallery"
                        ? "header__link-text-active"
                        : "header__link-text-black"
                    }`}
                  >
                    Фотогалерея
                  </p>
                </Link>
              </li>
              <li
                className={`header__nav-link ${
                  location.pathname === "/contacts"
                    ? "header__nav-link-active"
                    : ""
                }`}
              >
                <Link to="/contacts">
                  <p
                    className={`header__link-text ${
                      location.pathname === "/contacts"
                        ? "header__link-text-active"
                        : "header__link-text-black"
                    }`}
                  >
                    Контакты
                  </p>
                </Link>
              </li>
            </ul>
            <div className="header__container-phone border-black_phone">
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
              <div className="header__container-phone-button border-button">
                <button
                  className={`header__container-button ${
                    location.pathname === "/"
                      ? "header__container-button-white"
                      : "header__container-button-black border-black_phone"
                  }`}
                  onClick={openNavBar}
                ></button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  } else {
    header = (
      <>
        {navBarState && <NavBar onClose={closeNavBar} />}
        <header className="header">
          <div className="header__container">
            <Link to="/" className="header__logo-container border-white">
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
            <div className="header__container-phone border-white_phone">
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
              <div className="header__container-phone-button">
                <button
                  className={`header__container-button ${
                    location.pathname === "/"
                      ? "header__container-button-white"
                      : "header__container-button-black border-black_phone"
                  }`}
                  onClick={openNavBar}
                ></button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }

  return header;
}

export default Header;
