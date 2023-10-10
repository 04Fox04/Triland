import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import { nameRegex, telRegex } from "../../constants/constants";

function Form({ onClose }) {
  const formRef = useRef(null);
  const location = useLocation();
  // стейты для валидации имени
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  // стейты для валидации номера телефона
  const [tel, setTel] = useState("");
  const [isTelValid, setIsTelValid] = useState(false);
  // стейт для валидации кнопки submit
  const [disabledButton, setDisabledButton] = useState(true);

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

  useEffect(() => {
    // проверка на длину имени и наличее пробелов или букв
    setIsNameValid(nameRegex.test(name) && name.length >= 2); // имя должно быть не короче 2 символов
  }, [name]);

  useEffect(() => {
    // проверка на длину и формат номера телефона
    setIsTelValid(
      telRegex.test(tel) && tel.trim().length >= 11 // телефон должен быть не короче 11 символов
    );
  }, [tel]);

  useEffect(() => {
    // эффект для кнопки disabled который отлавливет состояние инпутов
    setDisabledButton(
      !(isNameValid && isTelValid) ||
        name.trim() === "" ||
        !isNameValid ||
        !isTelValid
    );
  }, [isNameValid, isTelValid, name, tel]);

  return (
    <div className="overlay" onClick={handleOverlayClick} ref={formRef}>
      <form className="form">
        <button className="form__closed" onClick={onClose}></button>
        <div className="form__titles">
          <h2 className="form__title">Заказать обратный звонок</h2>
          <p className="form__subtitle">Закажите звонок и мы перезвоним Вам!</p>
        </div>
        <input
          className="form__input"
          type="text"
          placeholder="Имя"
          value={name}
          required
          maxLength={30}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <span className="form__error">
          {!isNameValid && name.trim() !== ""
            ? name.length <= 1
              ? "Имя должно быть не короче 2 символов"
              : "Введите корректное Имя"
            : ""}
        </span>
        <input
          className="form__input"
          type="tel"
          placeholder="Телефон"
          value={tel}
          required
          maxLength={30}
          onChange={(e) => setTel(e.target.value)}
        ></input>
        <span className="form__error">
          {!isTelValid && tel.trim() !== ""
            ? telRegex.test(tel)
              ? "Телефон должен быть не короче 11 символов"
              : "Введите корректный номер телефона"
            : ""}
        </span>
        <button
          className={`${
            disabledButton ? "form__button-disabled" : "form__button-submit"
          }`}
          disabled={disabledButton}
        >
          Заказать звонок
        </button>
        <p className="form__info">
          Нажимая на эту кнопку вы соглашаетесь на
          <br />
          <a
            href="/personal-data-processing-policy"
            className="form__link"
            target="_blank"
            onClick={() => {
              if (location.pathname === "/contacts") {
                onClose();
              }
            }}
          >
            обработку персональных данных
          </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
