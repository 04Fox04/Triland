import React from "react";
import "./Promo.css";
import "../../vendor/fonts/fonts.css";
import { man } from "../../constants/constants";
import Form from "../Form/Form";

function Promo({ isFormOpen, onOpen, onClose }) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h2 className="promo__title">
            Создавайте шедевры с помощью профессиональной металлообработки
            <br /> и сварки
          </h2>
          <p className="promo__subtitle">
            Изготовление и сварка металлоизделий любой сложности
          </p>
          <button type="button" onClick={onOpen} className="promo__button">
            Заказать звонок
          </button>
        </div>
        <img src={man} className="promo__image" alt="Фото сотрудника" />
      </div>
      {isFormOpen && <Form onClose={onClose} />}
    </section>
  );
}

export default Promo;
