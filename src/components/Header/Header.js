import React from "react";
import "./Header.css"
import Logo from "../../images/logo-white.svg"
import PhoneWhite from "../../images/phone-white.svg"
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-container"><img src={Logo} className="header__logo" alt="Логотип" /></Link>
                <ul className="header__nav">
                    <li className="header__nav-link"><Link><p className="header__link-text">О компании</p></Link></li>
                    <li className="header__nav-link"><Link><p className="header__link-text">Услуги</p></Link></li>
                    <li className="header__nav-link"><Link><p className="header__link-text">Лицензии</p></Link></li>
                    <li className="header__nav-link"><Link><p className="header__link-text">Партнеры</p></Link></li>
                    <li className="header__nav-link"><Link><p className="header__link-text">Фотогалерея</p></Link></li>
                    <li className="header__nav-link"><Link><p className="header__link-text">Контакты</p></Link></li>
                </ul>
                <div className="phone__container">
                    <img src={PhoneWhite} className="phone__image" alt="Иконка телефона"/>
                    <p className="phone__text">
                        <a href="tel:+7 (495)-763-3470" className="phone__text-link">+7 495 763-34-70</a>
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;
