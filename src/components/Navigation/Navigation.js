import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const isPolicyPage =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/personal-data-processing-policy"
      ? " navigation-column"
      : "";
  const [navigationText, setnavigationText] = useState("");

  useEffect(() => {
    if (location.pathname === "/services") {
      setnavigationText("Услуги");
    } else if (location.pathname === "/photo-gallery") {
      setnavigationText("Фотогалерея");
    } else if (location.pathname === "/contacts") {
      setnavigationText("Контакты");
    } else if (location.pathname === "/privacy-policy") {
      setnavigationText("Политика конфиденциальности");
    } else {
      setnavigationText("Политика в отношении обработки персональных данных");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className={`navigation${isPolicyPage}`}>
      <div className="navigation__container">
        <Link to="/" className="navigation__link">
          <p className="navigation__link-text">Главная</p>
        </Link>
        <div className="navigation__line"></div>
      </div>
      <p className="navigation__link-text navigation__link-text-active">
        {navigationText}
      </p>
    </section>
  );
}

export default Navigation;
