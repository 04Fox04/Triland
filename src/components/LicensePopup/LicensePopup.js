import React, { useEffect, useRef } from "react";
import "./LicensePopup.css";

function LicensePopup({ onClose, imageSrc, imageAlt }) {
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
    <div className="license-popup" onClick={handleOverlayClick} ref={formRef}>
      <div className="license-popup__container">
        <button className="license-popup__close" onClick={onClose} />
        <img className="license-popup__image" src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}

export default LicensePopup;
