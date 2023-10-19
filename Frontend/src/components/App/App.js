import React, { useState, useEffect } from "react";
import "../../index.css";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Services from "../Services/Services";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ContactsPage from "../ContactsPage/ContactsPage";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import PersonalDataProcessingPolicy from "../PersonalDataProcessingPolicy/PersonalDataProcessingPolicy";
import NotFoundError from "../NotFoundError/NotFoundError";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  //стейт для открытия попапа с формой
  const [isFormOpen, setIsFormOpen] = useState(false);
  //стейт для открытия попапа с лицензиями
  const [isLicenseOpen, setIsLicensePopupOpen] = useState(false);
  // стейт для атрибута alt у изображений
  const [isImageAlt, setIsImageAlt] = useState("");
  //стейт для подставления нужного src в попап
  const [selectedImg, setSelectedImg] = useState(null);
  //используем хук для установки состояния компонента, добавляем Metalworking как состояние по умолчанию
  const [activeButton, setActiveButton] = useState("Металлообработка");
  // состояние отображение теста в попапе в результате отправки формы
/*   const [isTooltipText, setisTooltipText] = useState(false); */

  // изменяемое вручную состояние попапа результата отправки формы (всё ок или что-то пошло не так)
/*   const [success, setSuccess] = useState(true); */

  //обработчик клика
  const handleButtonClick = (componentName) => {
    if (componentName === "Металлообработка") {
      setActiveButton("Металлообработка");
    } else if (componentName === "Сварка") {
      setActiveButton("Сварка");
    }
  };

  //функция открытия попапа
  const handleOpenPopupForm = () => {
    setIsFormOpen(true);
  };

  //функция закрытия попапа
  const handleClosePopupForm = () => {
    setIsFormOpen(false);
  };

  //функция открытия попапа с лицензией
  const handleOpenPopupLicense = (imgSrc, imgAlt) => {
    setIsLicensePopupOpen(true);
    setSelectedImg(imgSrc);
    setIsImageAlt(imgAlt);
    // Заблокировать прокрутку страницы
    document.body.style.overflow = "hidden";
  };

  //функция закрытия попапа с лицензией
  const handleClosePopupLicense = () => {
    setIsLicensePopupOpen(false);
    setSelectedImg(null);
    setIsImageAlt("");
    // Разблокировать прокрутку страницы
    document.body.style.overflow = "auto";
  };

/*   useEffect(() => {
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
        setisTooltipText(true);
      } else {
        setisTooltipText(false);
      }
    };
    checkTime(); // Вызывается функция для первоначальной установки значения `isDisplayText`
    const interval = setInterval(checkTime, 60000); // Проверка времени каждую минуту

    return () => {
      clearInterval(interval); // Вызывается при размонтировании компонента и очищает интервал
    };
  }, []); */

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isFormOpen={isFormOpen}
                onOpen={handleOpenPopupForm}
                onClose={handleClosePopupForm}
                isPopupImageOpen={isLicenseOpen}
                imageSrc={selectedImg}
                imageAlt={isImageAlt}
                onOpenPopupLicense={handleOpenPopupLicense}
                onClosePopupLicense={handleClosePopupLicense}
                onButtonClick={handleButtonClick}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                onButtonClick={handleButtonClick}
                activeButton={activeButton}
              />
            }
          />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route
            path="/contacts"
            element={
              <ContactsPage
                isFormOpen={isFormOpen}
                onOpen={handleOpenPopupForm}
                onClose={handleClosePopupForm}
              />
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/personal-data-processing-policy"
            element={<PersonalDataProcessingPolicy />}
          />
          <Route path="/*" element={<NotFoundError />} />
        </Routes>

{/*         <InfoTooltip
          success={success}
          tooltipText={
            success
              ? isTooltipText
                ? "Упс, сейчас мы не работаем.\nМы обязательно позвоним\nВам в рабочие часы!"
                : "Заявка успешно отправлена!\nМы свяжемся с вами в ближайшее время."
              : "Что-то пошло не так! Попробуйте еще раз."
          }
        /> */}
      </div>
    </div>
  );
}

export default App;
