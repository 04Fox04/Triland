import React from "react";
import "./Services.css";
import "../../index.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Metalworking from "../Metalworking/Metalworking";
import Welding from "../Welding/Welding";
import Footer from "../Footer/Footer";

function Services({ onButtonClick, activeButton }) {
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
              onClick={() => onButtonClick("Металлообработка")}
            >
              Металлообработка
            </button>
            <button
              className={`services__navigation-button ${
                activeButton === "Сварка"
                  ? "services__navigation-button-active"
                  : ""
              }`}
              onClick={() => onButtonClick("Сварка")}
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
