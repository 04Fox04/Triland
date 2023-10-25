import React, { useEffect, useRef } from "react";
import "./InfoTooltip.css";
import {
  correctResultImage,
  errorResultImage,
} from "../../constants/constants";

function InfoTooltip({ success, tooltipText, onClose }) {
  const tooltipRef = useRef(null);

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
    if (e.target === tooltipRef.current) {
      onClose(); //закрыть попап только если клик был на overlay
    }
  };

  return (
    <div
      className="tooltip-popup"
      onClick={handleOverlayClick}
      ref={tooltipRef}
    >
      <div className="tooltip-popup__container">
        <button
          type="button"
          className="tooltip-popup__close"
          onClick={onClose}
        />
        <img
          className="tooltip-popup__image"
          src={success ? correctResultImage : errorResultImage}
          alt={success ? "Зелёная галочка" : "Красный крестик"}
        />
        <p className="tooltip-popup__text">{tooltipText}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
