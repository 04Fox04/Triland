import React, { useState, useEffect, Children, cloneElement } from 'react'; 
import './CarouselAboutCompany.css'; 
 
function CarouselAboutCompany({ children }) { 
  const [pages, setPages] = useState([]); //список страниц в карусели
  const [offset, setOffset] = useState(0); //смещение карусели по горизонтали
  const [activePage, setActivePage] = useState(0); //активная страница
  const [activeCircle, setActiveCircle] = useState(0); //активный индикатор (кружок)
  const [pageWidth, setPageWidth] = useState(879); // начальная ширина страницы в карусели

  useEffect(() => {
    // Обработчик изменения размера окна
    const handleResize = () => {
      // Определение новой ширины страницы в зависимости от ширины окна
      const newWidth = window.innerWidth >= 769 ? 879 : window.innerWidth;
      setPageWidth(newWidth);
    };
    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);
    // Вызываем handleResize при первоначальной загрузке страницы
    handleResize();
    // Удаление слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //функция для определения класса индикатора в зависимости от его активности
  const getIndicatorClassName = (index) => { 
    if (index === activeCircle) { 
      return 'about-company__slider-carousel-button-box-circle about-company__slider-carousel-button-box-circle-active'; 
    } else { 
      return 'about-company__slider-carousel-button-box-circle'; 
    } 
  }; 
 
  //обработчик клика на кнопку "влево"
  const handleLeftButtonClick = () => { 
    if (activePage > 0) {
      //изменяем смещение и активную страницу при клике влево
      setOffset(offset + pageWidth); 
      setActivePage(activePage - 1); 
      setActiveCircle(activePage - 1); 
    } 
  }; 
  
  //обработчик клика на кнопку "вправо"
  const handleRightButtonClick = () => { 
    if (activePage < pages.length - 1) {
      //изменяем смещение и активную страницу при клике вправо
      setOffset(offset - pageWidth); 
      setActivePage(activePage + 1); 
      setActiveCircle(activePage + 1); 
    } 
  }; 
 
  // Обработчик клика по индикатору
  const handleIndicatorClick = (index) => { 
    //изменяем смещение и активную страницу при клике на конкретный индикатор
    setOffset(-index * pageWidth); 
    setActivePage(index); 
    setActiveCircle(index); 
  }; 

  useEffect(() => { 
    //формируем массив страниц из дочерних компонентов и добавляем им необходимые свойства
    const pagesArray = Children.map(children, (child, index) => { 
      return cloneElement(child, { 
        style: { 
          height: '100%', // Изначально высота равна 100% (позже можно изменить)
          minWidth: pageWidth, 
          maxWidth: pageWidth, 
        }, 
        key: index, 
      }); 
    }); 
    setPages(pagesArray);//устанавливаем список страниц
  }, [children, pageWidth]); 
 
  return ( 
    <div className="about-company__slider-carousel"> 
      <div className="about-company__slider-carousel-window"> 
        <div 
          className="about-company__slider-carousel-window-all-pages" 
          style={{ transform: `translateX(${offset}px)` }} 
        > 
          {pages} 
        </div> 
      </div> 
      <div className="about-company__slider-carousel-button-box"> 
        <button 
          className={`about-company__slider-carousel-button-box-arrow arrow-left ${ 
            offset === -pageWidth * 0 ? "arrow-left-disabled" : "" 
          }`} 
          onClick={handleLeftButtonClick} 
        ></button> 
        <div className="about-company__slider-carousel-button-box-circles">  
          {pages.map((_, index) => ( 
            <button 
              key={index} 
              className={getIndicatorClassName(index)} 
              onClick={() => handleIndicatorClick(index)} 
            ></button> 
          ))} 
        </div> 
        <button 
          className={`about-company__slider-carousel-button-box-arrow arrow-right ${ 
            offset === -pageWidth * 4 ? "arrow-right-disabled" : "" 
          }`} 
          onClick={handleRightButtonClick} 
        ></button> 
      </div> 
    </div> 
  ); 
} 
 
export default CarouselAboutCompany;
