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
    <div className="licenses__container-carousel">
      <div className="licenses__container-buttons">
        <button
          type="button"
          className="licenses__button-arrow licenses__button-arrow-left"
          onClick={handleLeftArrowClick}
          disabled={offset === 0 ? true : false}
        />
        <button
          type="button"
          className="licenses__button-arrow licenses__button-arrow-right"
          onClick={handleRightArrowClick}
          disabled={offset === -600 ? true : false}
        />
      </div>
      <div className="licenses__window-list">
        <ul
          className="licenses__list"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </ul>
      </div>
    </div>
  );
}

export default LicensesCarousel;
