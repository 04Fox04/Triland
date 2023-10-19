import React, { useState, useEffect } from "react";
import "./OurClientsCarousel.css";

// пропс children это блоки которые передаются в файле licenses
function OurClientsCarousel({ children }) {
  // стейт смещения блока в пикселях
  const [offset, setOffset] = useState(0);
  const [lengthScroll, setlengthScroll] = useState(0);
  const [limitScroll, setlimitScroll] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) {
        setOffset(0);
        setlengthScroll(302);
        setlimitScroll(-1208);
      } else if (window.innerWidth <= 1180 && window.innerWidth >= 1030) {
        setOffset(0);
        setlengthScroll(256);
        setlimitScroll(-1024);
      } else if (window.innerWidth <= 1030 && window.innerWidth >= 767) {
        setOffset(0);
        setlengthScroll(256);
        setlimitScroll(-1280);
      } else if (window.innerWidth <= 767 && window.innerWidth > 600) {
        setOffset(0);
        setlengthScroll(201);
        setlimitScroll(-1005);
      } else if (window.innerWidth <= 600 && window.innerWidth >= 515) {
        setOffset(0);
        setlengthScroll(168);
        setlimitScroll(-840);
      } else if (window.innerWidth <= 515 && window.innerWidth >= 400) {
        setOffset(0);
        setlengthScroll(196);
        setlimitScroll(-1176);
      } else if (window.innerWidth <= 400) {
        setOffset(0);
        setlengthScroll(290.8);
        setlimitScroll(-2035.6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setInterval(() => {
      handleRightScroll();
    }, 2000); // время задержки между автоматической прокруткой в миллисекундах
    return () => {
      clearInterval(timer); // очистка таймера при размонтировании компонента
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, [lengthScroll, window.innerWidth]);

  function handleRightScroll() {
    // высчитываем значение offset
    setOffset((currentOffset) => {
      // размер смещения
      const newOffset = currentOffset - lengthScroll;
      // ограничение значения чтобы строллилось до нужного момента
      if (newOffset === limitScroll) {
        return 0;
      }
      return newOffset;
    });
  }

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
