import React, { useState } from "react";
import "./Services.css";
import "../../index.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Metalworking from "../Metalworking/Metalworking";
import Welding from "../Welding/Welding";
import Footer from "../Footer/Footer";

function Services() {
  //используем хук для установки состояния компонента, добавляем Metalworking как состояние по умолчанию
  const [activeButton, setActiveButton] = useState("Металлообработка");

  //обработчик клика
  const handleButtonClick = (componentName) => {
    if (componentName === "Металлообработка") {
      setActiveButton("Металлообработка");
    } else if (componentName === "Сварка") {
      setActiveButton("Сварка");
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section className="services">
          <h2 className="services__titlle section-title">Услуги</h2>
          <div className="services__navigation">
            <button
              className={`services__navigation-button ${
                activeButton === "Металлообработка"
                  ? "services__navigation-button-active"
                  : ""
              }`}
              onClick={() => handleButtonClick("Металлообработка")}
            >
              Металлообработка
            </button>
            <button
              className={`services__navigation-button ${
                activeButton === "Сварка"
                  ? "services__navigation-button-active"
                  : ""
              }`}
              onClick={() => handleButtonClick("Сварка")}
            >
              Сварка
            </button>
          </div>
          {activeButton === "Металлообработка" ? <Metalworking /> : <Welding />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Services;
