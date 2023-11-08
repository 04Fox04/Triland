import React from "react";
import "./Promo.css";
import "../../vendor/fonts/fonts.css";
import { man } from "../../constants/constants";
import Form from "../Form/Form";

function Promo({ isFormOpen, onOpen, onClose, isTooltipText }) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h2 className="promo__title">
            Полный спектр услуг, от разработки технической документации до
            готового изделия!
          </h2>
          <p className="promo__subtitle">
          Изготовление деталей на металлообрабатывающих станках. Работа с цветными и черными металлами, фторопластом и другими  материалами. Сварка любых сталей, а также аргонная сварка цветных металлов.
          </p>
          <button type="button" onClick={onOpen} className="promo__button">
            Заказать звонок
          </button>
        </div>
        <img src={man} className="promo__image" alt="Фото сотрудника" />
      </div>
      {isFormOpen && <Form onClose={onClose} isTooltipText={isTooltipText} />}
    </section>
  );
}

export default Promo;
