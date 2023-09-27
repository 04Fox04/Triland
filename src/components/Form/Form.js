import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({ onClose }) {
  const formRef = useRef(null);

  useEffect(() => {
    //обработчик для клавиши "Esc"
    const handleEsc = (e) => {
      //проверка на нажатие клавиши Esc (код клавиши 27)
      if (e.keyCode === 27) {
        onClose(); // вызывается функция закрытия попапа
      }
    };

    //слушатель события при монтировании компонента
    document.addEventListener("keydown", handleEsc);

    //убираем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  //обработчик клика на overlay
  const handleOverlayClick = (e) => {
    if (e.target === formRef.current) {
      onClose(); //закрыть попап только если клик был на overlay
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick} ref={formRef}>
      <form className="form">
        <button className="form__closed" onClick={onClose}></button>
        <div className="form__titles">
          <h2 className="form__title">Заказать обратный звонок</h2>
          <p className="form__subtitle">
            Закажите звонок и мы перезвоним Вам в течении 5 минут!
          </p>
        </div>
        <input
          className="form__input"
          type="text"
          placeholder="Имя"
        ></input>
        <input
          className="form__input"
          type="tel"
          placeholder="Телефон"
        ></input>
        <button className="form__submit">Заказать звонок</button>
        <p className="form__info">
          Нажимая на эту кнопку вы соглашаетесь на
          <br />
          <Link className="form__link">
            обработку персональных данных
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Form;
