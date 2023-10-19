import React from "react";
import "./NavBar.css";
import { logoBlack, phoneBlack } from "../../constants/constants";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function NavBar({ onClose }) {
  const location = useLocation();

  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__container">
          <div className="nav-bar__container-header">
            <div className="nav-bar__container-header-logo">
              <HashLink to="/" onClick={onClose}>
                <img
                  src={logoBlack}
                  className="nav-bar__container-header-logo-image"
                  alt="логотип"
                ></img>
              </HashLink>
            </div>
            <div className="nav-bar__container-box">
              <img
                src={phoneBlack}
                className="nav-bar__container-box-image"
                alt="Иконка телефона"
              ></img>
              <p className="nav-bar__container-box-text">
                <a
                  href="tel:+7(495)-763-3470"
                  className="nav-bar__container-box-text-link"
                >
                  +7 495 763-34-70
                </a>
              </p>
              <div className="nav-bar__container-box-button">
                <button
                  className="nav-bar__container-box-button-closed"
                  onClick={onClose}
                ></button>
              </div>
            </div>
          </div>
          <ul className="nav-bar__container-list">
            <li className="nav-bar__container-list-item">
              <HashLink
                to="/#about-company"
                onClick={onClose}
                className="nav-bar__container-list-item-link"
              >
                О компании
              </HashLink>
            </li>
            <li className="nav-bar__container-list-item">
              <HashLink
                to="/services"
                onClick={onClose}
                className={`nav-bar__container-list-item-link ${
                  location.pathname === "/services"
                    ? "nav-bar__container-list-item-link-active"
                    : ""
                }`}
              >
                Услуги
              </HashLink>
            </li>
            <li className="nav-bar__container-list-item">
              <HashLink
                to="/#licenses"
                onClick={onClose}
                className="nav-bar__container-list-item-link"
              >
                Лицензии
              </HashLink>
            </li>
            <li className="nav-bar__container-list-item">
              <HashLink
                to="/#our-clients"
                onClick={onClose}
                className="nav-bar__container-list-item-link"
              >
                Партнеры
              </HashLink>
            </li>
            <li className="nav-bar__container-list-item">
              <HashLink
                to="/photo-gallery"
                onClick={onClose}
                className={`nav-bar__container-list-item-link ${
                  location.pathname === "/photo-gallery"
                    ? "nav-bar__container-list-item-link-active"
                    : ""
                }`}
              >
                Фотогалерея
              </HashLink>
            </li>
            <li className="nav-bar__container-list-item">
              <HashLink
                to="/contacts"
                onClick={onClose}
                className={`nav-bar__container-list-item-link ${
                  location.pathname === "/contacts"
                    ? "nav-bar__container-list-item-link-active"
                    : ""
                }`}
              >
                Контакты
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
