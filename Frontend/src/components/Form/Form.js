import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import { nameRegex, telRegex } from "../../constants/constants";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

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
  //стейт для отображениия InfoTooltip
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  // изменяемое вручную состояние попапа результата отправки формы (всё ок или что-то пошло не так)
  const [success, setSuccess] = useState(true);
  // состояние отображение теста в попапе в результате отправки формы
  const [isTooltipText, setisTooltipText] = useState(true);

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

  async function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formBtn = document.querySelector(".form");

    // Получение данных из формы
    const formData = new FormData(form);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value.trim().replace(/\s+/g, " "); // trim и регулярное выражение убирают лишние пробелы
    });

    // Отправка формы на бэк
    sendFormData(form, formBtn, formDataObject);
  }

  async function sendFormData(form, formBtn, formDataObject) {
    try {
      formBtn.disabled = true;

      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        setIsInfoTooltip(true); //здесь должно сообщение об удачной отправке
        setSuccess(true);
        onClose() // закрываем попап с формой
        form.reset();
      } else if (response.status === 422) {
        const errors = await response.json();
        console.log(errors);
        throw new Error("Ошибка валидации данных");
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      onClose() // закрываем попап с формой
      console.error(error.message);
      setIsInfoTooltip(true);
      setSuccess(false); //здесь должно сообщение о неудачной отправке
    } finally {
      formBtn.disabled = false;
    }
  }

  useEffect(() => {
    const checkTime = () => {
      const currentDay = new Date().getUTCDay(); // Получаем текущий день недели (0 - воскресенье, 1 - понедельник, и т.д.)
      const currentHour = new Date()
        .toLocaleString("ru-RU", {
          timeZone: "Europe/Moscow",
          hour: "numeric",
          hourCycle: "h23",
        }) // Получаем текущий час по Москве
        .replace(/^0/, ""); // Убираем лишние нули в начале показателя времени
      if (
        (currentDay >= 1 &&
          currentDay <= 5 &&
          (currentHour >= 17 || currentHour <= 10)) || // Проверяем будние дни с 17:00 до 10 утра
        currentDay === 6 || // Проверяем субботу (весь день)
        currentDay === 0 // Проверяем воскресенье (весь день)
      ) {
        setisTooltipText(false);
      } else {
        setisTooltipText(true);
      }
    };
    checkTime(); // Вызывается функция для первоначальной установки значения `isDisplayText`
    const interval = setInterval(checkTime, 60000); // Проверка времени каждую минуту

    return () => {
      clearInterval(interval); // Вызывается при размонтировании компонента и очищает интервал
    };
  }, []);
console.log(isInfoTooltip)
  return (
    <>
      {isInfoTooltip ? (
        <InfoTooltip
        success={success}
        tooltipText={
          success
            ? isTooltipText
              ? "Заявка успешно отправлена!\nМы свяжемся с вами в ближайшее время."
              : "Упс, сейчас мы не работаем.\nМы обязательно позвоним\nВам в рабочие часы!"
            : "Что-то пошло не так! Попробуйте еще раз."
        }
        onClose={onClose}
      />
      ) : (
        <>
          <div className="overlay" onClick={handleOverlayClick} ref={formRef}>
            <form className="form" onSubmit={submitForm}>
              <button className="form__closed" onClick={onClose}></button>
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
                name="phone"
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
