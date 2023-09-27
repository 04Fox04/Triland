import React, { useState } from "react";
import "./CarouselLicenses.css";

// пропс children это блоки которые передаются в файле licenses
function CarouselLicenses({ children }) {
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
    <div className="carousel-licenses__container">
      <div className="carousel-licenses__buttons-container">
        <button
          type="button"
          className="carousel-licenses__arrow-button carousel-licenses__arrow-left-button"
          onClick={handleLeftArrowClick}
          disabled={offset === 0 ? true : false}
        />
        <button
          type="button"
          className="carousel-licenses__arrow-button carousel-licenses__arrow-right-button"
          onClick={handleRightArrowClick}
          disabled={offset === -600 ? true : false}
        />
      </div>
      <div className="carousel-licenses__list-window">
        <ul
          className="carousel-licenses__list"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </ul>
      </div>
    </div>
  );
}

export default CarouselLicenses;
