import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({ onClose }) {
  useEffect(() => {
    //обработчик для клавиши "Esc"
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        //проверка на нажатие клавиши Esc (код клавиши 27)
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

  return (
    <div className="form">
      <div className="form__container">
        <button className="form__container-closed" onClick={onClose}></button>
        <div className="form__container-titles">
          <h2 className="form__container-title">Заказать обратный звонок</h2>
          <p className="form__container-subtitle">
            Закажите звонок и мы перезвоним Вам в течении 5 минут!
          </p>
        </div>
        <input
          className="form__container-input"
          type="text"
          placeholder="Имя"
        ></input>
        <input
          className="form__container-input"
          type="tel"
          placeholder="Телефон"
        ></input>
        <button className="form__container-submit">Заказать звонок</button>
        <p className="form__container-info">
          Нажимая на эту кнопку вы соглашаетесь на
          <br />
          <Link className="form__container-link">
            обработку персональных данных
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Form;
