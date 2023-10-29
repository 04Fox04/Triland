import React, { useState, useEffect } from "react";
import "./Services.css";
import "../../index.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Metalworking from "../Metalworking/Metalworking";
import Welding from "../Welding/Welding";
import Footer from "../Footer/Footer";

function Services({ onButtonClick, activeButton }) {
  // стейт для отслеживания ширины экрана
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);
  // функция, которая будет вызываться при изменении ширины экрана
  const maxWidthWindow = () => {
    setMaxWidth(window.innerWidth);
  };
  // эффект, который добавляет слушателя изменения размера окна при монтировании компонента
  useEffect(() => {
    window.addEventListener("resize", maxWidthWindow);
    // функция для очистки слушателя при размонтировании компонента
    return () => {
      window.removeEventListener("resize", maxWidthWindow);
    };
  }, []);

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
                  ? ""
                  : "services__navigation-button-active"
              }`}
              onClick={() => onButtonClick("Металлообработка")}
            >
              Металлообработка
            </button>
            <button
              className={`services__navigation-button ${
                activeButton === "Сварка"
                  ? ""
                  : "services__navigation-button-active"
              }`}
              onClick={() => onButtonClick("Сварка")}
            >
              Сварка
            </button>
          </div>
          {activeButton === "Металлообработка" ? (
            <Metalworking maxWidth={maxWidth} />
          ) : (
            <Welding maxWidth={maxWidth} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Services;
