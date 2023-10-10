import React, { useState, useEffect } from "react";
import "./LicensesCarousel.css";

// пропс children это блоки которые передаются в файле licenses
function LicensesCarousel({ children }) {
  // стейт смещения блока в пикселях
  const [offset, setOffset] = useState(0);
  const [limitScroll, setlimitScroll] = useState(0);
  const [lengthScroll, setlengthScroll] = useState(0);

  // изменение значения, на сколько сдвинется блок, а так же лимитная точка карусели, и сброс карусели при изменении ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) {
        setOffset(0);
        setlengthScroll(300);
        setlimitScroll(-600);
      } else if (window.innerWidth <= 1180 && window.innerWidth >= 1040) {
        setOffset(0);
        setlengthScroll(255);
        setlimitScroll(-510);
      } else if (window.innerWidth <= 1040 && window.innerWidth >= 920) {
        setOffset(0);
        setlengthScroll(230);
        setlimitScroll(-460);
      } else if (window.innerWidth <= 920 && window.innerWidth >= 767) {
        setOffset(0);
        setlengthScroll(192);
        setlimitScroll(-384);
      } else if (window.innerWidth <= 767 && window.innerWidth >= 627) {
        setOffset(0);
        setlengthScroll(205);
        setlimitScroll(-615);
      } else if (window.innerWidth <= 627 && window.innerWidth >= 485) {
        setOffset(0);
        setlengthScroll(155);
        setlimitScroll(-465);
      } else if (window.innerWidth <= 485) {
        setOffset(0);
        setlengthScroll(160);
        setlimitScroll(-640);
      }
    };
    // Вызов функции handleResize при первом рендеринге
    handleResize();

    window.addEventListener("resize", handleResize);

    // Очистка обработчика событий после удаления компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftArrowClick = () => {
    // высчитываем значение offset при клике на стрелочку
    setOffset((currentOffset) => {
      // происходит расчёт при клике на кнопку "влево", здесь прибавляется ширина блока+маргин между блоками, например 270+30
      const newOffset = currentOffset + lengthScroll;
      // ограничение значения чтобы скроллилось до нужного момента
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    // высчитываем значение offset при клике на стрелочку
    setOffset((currentOffset) => {
      // происходит расчёт при клике на кнопку "вправо", здесь отнимается ширина блока+маргин между блоками, например 270+30
      const newOffset = currentOffset - lengthScroll;
      // ограничение значения чтобы скроллилось до нужного момента
      return Math.max(newOffset, limitScroll);
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
          disabled={offset === limitScroll ? true : false}
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
