import React from "react";
import "./Footer.css";
import { logo } from "../../constants/constants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/" className="footer__logo-link">
          <img src={logo} className="footer__logo" alt="Логотип" />
        </Link>
        <div className="footer__container-info">
          <ul className="footer__nav">
            <li className="footer__nav-link">
              <a href="#about-company">
                <p className="footer__link-text">О компании</p>
              </a>
            </li>
            <li className="footer__nav-link">
              <Link to="/services" className="footer__link-item">
                <p className="footer__link-text">Услуги</p>
              </Link>
            </li>
            <li className="footer__nav-link">
              <a href="#licenses" className="footer__link-item">
                <p className="footer__link-text">Лицензии</p>
              </a>
            </li>
            <li className="footer__nav-link">
              <a href="#our-clients" className="footer__link-item">
                <p className="footer__link-text">Партнеры</p>
              </a>
            </li>
            <li className="footer__nav-link">
              <Link to="/photo-gallery" className="footer__link-item">
                <p className="footer__link-text">Фотогалерея</p>
              </Link>
            </li>
            <li className="footer__nav-link">
              <Link to="/contacts" className="footer__link-item">
                <p className="footer__link-text">Контакты</p>
              </Link>
            </li>
          </ul>
          <div className="footer__container-protection-rights">
            <p className="footer__protection-rights-text">
              &#169; 2023 Все права защищены
            </p>
            <Link to="/" className="footer__link-item">
              <p className="footer__protection-rights-text footer__privacy-policy-text">
                Политика конфиденциальности
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
