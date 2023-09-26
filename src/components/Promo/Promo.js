import React, { useState } from "react";
import "./Promo.css";
import "../../vendor/fonts/fonts.css";
import Man from "../../images/main-man.png";
import Form from "../Form/Form";

function Promo() {
  //стейт для открытия попапа с формой
  const [isFormOpen, setIsFormOpen] = useState(false);


  //функция открытия попапа
  const handleOpenPopupForm = () => {
    setIsFormOpen(true);
  };

  //функция закрытия попапа
  const handleClosePopupForm = () => {
    setIsFormOpen(false);
  };

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
          <button type="button" onClick={handleOpenPopupForm} className="promo__button">
            Заказать звонок
          </button>
        </div>
        <img src={Man} className="promo__image" alt="Фото сотрудника" />
      </div>
      {isFormOpen && <Form onClose={handleClosePopupForm} />}
    </section>
  );
}

export default Promo;
