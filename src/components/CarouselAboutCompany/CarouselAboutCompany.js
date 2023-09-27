import React, { useState, useEffect, Children, cloneElement } from "react";
import "./CarouselAboutCompany.css";
const PAGE_WIDTH = 879; //Переменная для хранения ширины одной страницы (блока).

function CarouselAboutCompany({ children }) {
  // Стейт для хранения страниц (блоков)
  const [pages, setPages] = useState([]);
  // Стейт для смещения блока в пикселях
  const [offset, setOffset] = useState(0);

  // Обработчик клика на кнопку "Влево"
  const handleLeftButtonClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      // Ограничиваем смещение, чтобы не уходило влево за пределы первой страницы
      return Math.min(newOffset, 0);
    });
  };

  // Обработчик клика на кнопку "Вправо"
  const handleRightButtonClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      // Ограничиваем смещение, чтобы не уходило вправо за пределы последней страницы
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    // Преобразуем дочерние компоненты в страницы, добавляя им стили
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="carousel-about__company-container">
      <div className="carousel-about__company-container-window">
        <div
          className="carousel-about__company-container-all-pages"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <div className="carousel-about__company-container-button-box">
        <button
          className="carousel-about__company-container-arrow arrow-left"
          onClick={handleLeftButtonClick}
        ></button>
        <button
          className="carousel-about__company-container-arrow arrow-right"
          onClick={handleRightButtonClick}
        ></button>
      </div>
    </div>
  );
}

export default CarouselAboutCompany;
