import React from "react";
import "./Footer.css";
import { logo } from "../../constants/constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
              <HashLink to="/#about-company" smooth={true} duration={400}>
                <p className="footer__link-text">О компании</p>
              </HashLink>
            </li>
            <li className="footer__nav-link">
              <a href="/services" className="footer__link-item">
                <p className="footer__link-text">Услуги</p>
              </a>
            </li>
            <li className="footer__nav-link">
              <HashLink
                to="/#licenses"
                className="footer__link-item"
                smooth={true}
                duration={400}
              >
                <p className="footer__link-text">Лицензии</p>
              </HashLink>
            </li>
            <li className="footer__nav-link">
              <HashLink
                to="/#our-clients"
                className="footer__link-item"
                smooth={true}
                duration={400}
              >
                <p className="footer__link-text">Партнеры</p>
              </HashLink>
            </li>
            <li className="footer__nav-link">
              <a href="/photo-gallery" className="footer__link-item">
                <p className="footer__link-text">Фотогалерея</p>
              </a>
            </li>
            <li className="footer__nav-link">
              <a href="/contacts" className="footer__link-item">
                <p className="footer__link-text">Контакты</p>
              </a>
            </li>
          </ul>
          <div className="footer__container-protection-rights">
            <p className="footer__protection-rights-text">
              &#169; 2023 Все права защищены
            </p>
            <a href="/privacy-policy" className="footer__link-item">
              <p className="footer__protection-rights-text footer__privacy-policy-text">
                Политика конфиденциальности
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
