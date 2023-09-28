import React, { useState } from "react";
import "./LicensesCarousel.css";

// пропс children это блоки которые передаются в файле licenses
function LicensesCarousel({ children }) {
  // стейт смещения блока в пикселях
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    // высчитываем значение offset при клике на стрелочку
    setOffset((currentOffset) => {
      // при клике на кнопку "влево" прибавляем 300 пикселей (300, а не 270, потому что учитываются ещё и маргины)
      const newOffset = currentOffset + 300;
      // ограничение значения чтобы строллилось до нужного момента
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    // высчитываем значение offset при клике на стрелочку
    setOffset((currentOffset) => {
      // при клике на кнопку "вправо" отнимаем 300 пикселей (300, а не 270, потому что учитываются ещё и маргины)
      const newOffset = currentOffset - 300;
      // ограничение значения чтобы строллилось до нужного момента
      return Math.max(newOffset, -600);
    });
  };

  return (
    <div className="licenses-carousel__container">
      <div className="licenses-carousel__buttons-container">
        <button
          type="button"
          className="licenses-carousel__arrow-button licenses-carousel__arrow-left-button"
          onClick={handleLeftArrowClick}
          disabled={offset === 0 ? true : false}
        />
        <button
          type="button"
          className="licenses-carousel__arrow-button licenses-carousel__arrow-right-button"
          onClick={handleRightArrowClick}
          disabled={offset === -600 ? true : false}
        />
      </div>
      <div className="licenses-carousel__list-window">
        <ul
          className="licenses-carousel__list"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </ul>
      </div>
    </div>
  );
}

export default LicensesCarousel;
