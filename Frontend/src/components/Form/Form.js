import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import { nameRegex, telRegex } from "../../constants/constants";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as email from "../../utils/SendEmailApi";

function Form({ onClose, isTooltipText }) {
  const overlayRef = useRef(null);
  const location = useLocation();
  // стейты для валидации имени
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  // стейты для валидации номера телефона
  const [tel, setTel] = useState("");
  const [isTelValid, setIsTelValid] = useState(false);
  // стейт для валидации кнопки submit
  const [disabledButton, setDisabledButton] = useState(true);
  //стейт для отображениия InfoTooltip
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  // состояние попапа результата отправки формы (всё ок или что-то пошло не так)
  const [success, setSuccess] = useState(true);

  //обработчик клика на overlay
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose(); //закрыть попап только если клик был на overlay
    }
  };

  function handleTooltipClose() {
    setIsInfoTooltip(false);
  }

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

  async function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    // Получение данных из формы
    const formData = new FormData(form);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value.trim().replace(/\s+/g, " "); // trim и регулярное выражение убирают лишние пробелы
    });

    // Отправка формы на бэк
    sendFormData(form, formDataObject);
  }

  async function sendFormData(form, formDataObject) {
    try {
      setDisabledButton(true);
      const success = await email.sendEmail(formDataObject);
      if (success) {
        setIsInfoTooltip(true);
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      setIsInfoTooltip(true);
      setSuccess(false);
    } finally {
      setDisabledButton(false);
    }
  }

  return (
    <>
      {isInfoTooltip ? (
        <InfoTooltip
          success={success}
          tooltipText={
            success
              ? isTooltipText
                ? "Заявка успешно отправлена!\nМы свяжемся с вами в ближайшее время."
                : "Упс, сейчас мы не работаем.\nМы обязательно позвоним Вам в рабочие часы!"
              : "Что-то пошло не так! Попробуйте еще раз."
          }
          onClose={success ? onClose : handleTooltipClose}
        />
      ) : (
        <>
          <div
            className="overlay"
            onClick={handleOverlayClick}
            ref={overlayRef}
          >
            <form className="form" onSubmit={submitForm}>
              <button className="form__closed" onClick={onClose} />
              <div className="form__titles">
                <h2 className="form__title">Заказать обратный звонок</h2>
                <p className="form__subtitle">
                  Закажите звонок и мы перезвоним Вам!
                </p>
              </div>
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                required
                maxLength={30}
                onChange={(e) => setName(e.target.value)}
              />
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
                name="phone"
                placeholder="Телефон"
                value={tel}
                required
                maxLength={30}
                onChange={(e) => setTel(e.target.value)}
              />
              <span className="form__error">
                {!isTelValid && tel.trim() !== ""
                  ? telRegex.test(tel)
                    ? "Телефон должен быть не короче 11 символов"
                    : "Введите корректный номер телефона"
                  : ""}
              </span>
              <button
                className={`${
                  disabledButton
                    ? "form__button-disabled"
                    : "form__button-submit"
                }`}
                type="submit"
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
        </>
      )}
    </>
  );
}

export default Form;
