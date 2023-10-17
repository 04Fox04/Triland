import React, { useState } from "react";
import "../../index.css";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Services from "../Services/Services";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ContactsPage from "../ContactsPage/ContactsPage";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import PersonalDataProcessingPolicy from "../PersonalDataProcessingPolicy/PersonalDataProcessingPolicy";
import NotFoundError from "../NotFoundError/NotFoundError";

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
      </div>
    </div>
  );
}

export default App;
