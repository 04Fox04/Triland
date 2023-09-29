import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navigation = () => {
    return location.pathname === "/services";
  };

  const navigationColorText = {
    color: navigation() ? "#000000" : "#000000",
  };

  const navigatonText = navigation() ? "Услуги" : "Фотогалерея";

  return (
    <section className="navigation">
      <Link to="/" className="navigation__link">
        <p className="navigation__link-text">Главная</p>
      </Link>
      <div className="navigation__line"></div>
      <Link to="" className="navigation__link">
        <p className="navigation__link-text" style={navigationColorText}>
          {navigatonText}
        </p>
      </Link>
    </section>
  );
}

export default Navigation;
