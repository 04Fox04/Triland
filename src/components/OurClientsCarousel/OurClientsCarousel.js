import React, { useState, useEffect } from "react";
import "./OurClientsCarousel.css";

// пропс children это блоки которые передаются в файле licenses
function OurClientsCarousel({ children }) {
  // стейт смещения блока в пикселях
  const [offset, setOffset] = useState(0);

  const handleRightScroll = () => {
    // высчитываем значение offset при клике на стрелочку
    setOffset((currentOffset) => {
      // размер смещения
      const newOffset = currentOffset - 302;
      // ограничение значения чтобы строллилось до нужного момента
      if (newOffset === -1208) {
        return 0;
      }
      return newOffset;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleRightScroll();
    }, 2000); // время задержки между автоматической прокруткой в миллисекундах
    return () => {
      clearInterval(timer); // очистка таймера при размонтировании компонента
    };
  }, []);

  return (
    <div className="our-clients__container-carousel">
      <div className="our-clients__window-list">
        <ul
          className="our-clients__list"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children.map((child, index) => (
            <li className="our-clients__item" key={index}>
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OurClientsCarousel;
