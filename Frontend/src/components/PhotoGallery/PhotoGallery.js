import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./PhotoGallery.css";
import "../../index.css";
import Navigation from "../Navigation/Navigation";
import { photoItems } from "../../constants/constants";
import PhotoGalleryPopup from "../PhotoGalleryPopup/PhotoGalleryPopup";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function PhotoGallery() {
  // стейт для отображение дефолтного кол-ва фотографий
   const [displayedPhotos, setDisplayedPhotos] = useState(30);
  // стейт для открытия/закрытия попапа
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // стейт для отображения прелоадера
  const [loading, setLoading] = useState(true);
  // // стейты для отображения кнопки
  const [showButton, setShowButton] = useState(false);
  const [showPhoto, setShowPhoto] = useState(66);

  // обработчик клика
  const handleLoadMore = () => {
    if (window.innerWidth <= 1200 && window.innerWidth >= 1000) {
      setDisplayedPhotos(displayedPhotos + 10); // если ширина экрана меньше 1200 добавляется еще 10 фотографий
      setShowPhoto(70); // кнопка дизейблится на 70 фотографиях
    } else if (window.innerWidth <= 1000 && window.innerWidth >= 751) {
      setDisplayedPhotos(displayedPhotos + 8); // если ширина экрана меньше 1000 добавляется еще 8 фотографий
      setShowPhoto(68); // кнопка дизейблится на 68 фотографиях
    } else if (window.innerWidth <= 750 && window.innerWidth >= 0) {
      setDisplayedPhotos(displayedPhotos + 6); // если ширина экрана меньше 750 добавляется еще 6 фотографий
      setShowPhoto(64); // кнопка дизейблится на 64 фотографиях
    } else {
      setDisplayedPhotos(displayedPhotos + 12); // по дефолту добалвяется 12 фотографий
    }
  };

  // функция открытия попапа
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // функция закрытия попапа
  const handleClosePopup = () => {
    setSelectedPhoto(null);
  };

  // Когда фотографии загружены, изменяем стейт loading на false и отображаем фотогалерею
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowButton(true); // устанавливаем showButton в true после загрузки фотографий
    }, 2000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000 && window.innerWidth >= 751) {
        setDisplayedPhotos(20); // Устанавливаем 20, когда ширина экрана меньше или равна 1000px и больше или равна 751
      } else if (window.innerWidth <= 750 && window.innerWidth >= 571) {
        setDisplayedPhotos(15); // Устанавливаем 15, когда ширина экрана меньше или равна 750px и больше или равна 571
      } else if (window.innerWidth <= 570 && window.innerWidth >= 320) {
        setDisplayedPhotos(10); // Устанавливаем 10, когда ширина экрана меньше или равна 570px и больше или равна 320
      } else {
        setDisplayedPhotos(30); // Устанавливаем 10, когда ширина экрана меньше или равна 570px и больше или равна 320
      }
    };

    // Добавление слушателя события изменения размера окна
    window.addEventListener("resize", handleResize);
    // Вызываем handleResize при первоначальной загрузке страницы
    handleResize();
    // Удаление слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(displayedPhotos)
  // console.log(showPhoto)

  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section className="photo-gallery">
          <h2 className="photo-gallery__title section-title">Фотогалерея</h2>
          {loading ? (
            // Если loading === true, отображаем прелоадер
            <Preloader />
          ) : (
            <ul className="photo-gallery__list">
              {photoItems.slice(0, displayedPhotos).map((photo, index) => (
                <li key={index} className="photo-gallery__list-item">
                  <img
                    className="photo-gallery__list-item-image"
                    src={photo}
                    alt="Фото компании"
                    onClick={() => handlePhotoClick(photo)}
                  />
                </li>
              ))}
            </ul>
          )}
          {!loading &&
            (displayedPhotos === showPhoto ? (
              <button className="photo-gallery__button-disabled" disabled>
                Смотреть больше
              </button>
            ) : (
              <button
                className="photo-gallery__button"
                onClick={handleLoadMore}
              >
                Смотреть больше
              </button>
            ))}
        </section>
      </main>
      {selectedPhoto && (
        <PhotoGalleryPopup
          photo={selectedPhoto}
          onClose={handleClosePopup}
          photoItems={photoItems}
        />
      )}
      <Footer />
    </>
  );
}

export default PhotoGallery;

//--------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import "./PhotoGallery.css";
// import "../../index.css";
// import Navigation from "../Navigation/Navigation";
// import { photoItems } from "../../constants/constants";
// import PhotoGalleryPopup from "../PhotoGalleryPopup/PhotoGalleryPopup";
// import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";

// function PhotoGallery() {
//   const localStorageKey = "displayedPhotos"; // Ключ для localStorage

//   // Получаем значение displayedPhotos из localStorage, либо используем значение по умолчанию (10)
//   const [displayedPhotos, setDisplayedPhotos] = useState(() => {
//     const storedValue = localStorage.getItem(localStorageKey);
//     return storedValue ? parseInt(storedValue, 20) : 20;
//   });

//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showButton, setShowButton] = useState(true); // Изменили на true
//   const [showPhoto, setShowPhoto] = useState(66);

//   const handleLoadMore = () => {
//     if (window.innerWidth <= 1200 && window.innerWidth >= 1000) {
//       setDisplayedPhotos(displayedPhotos + 10);
//       setShowPhoto(70);
//     } else if (window.innerWidth <= 1000 && window.innerWidth >= 751) {
//       setDisplayedPhotos(displayedPhotos + 8);
//       setShowPhoto(68);
//     } else if (window.innerWidth <= 750 && window.innerWidth >= 0) {
//       setDisplayedPhotos(displayedPhotos + 6);
//       setShowPhoto(64);
//     } else {
//       setDisplayedPhotos(displayedPhotos + 12);
//     }
//     localStorage.setItem(localStorageKey, displayedPhotos.toString());
//   };

//   const handleResize = () => {
//     if (window.innerWidth <= 1200 && window.innerWidth >= 1000) {
//       setDisplayedPhotos(displayedPhotos + 10);
//       setShowPhoto(70);
//     } else if (window.innerWidth <= 1000 && window.innerWidth >= 751) {
//       setDisplayedPhotos(displayedPhotos + 8);
//       setShowPhoto(68);
//     } else if (window.innerWidth <= 750 && window.innerWidth >= 0) {
//       setDisplayedPhotos(displayedPhotos + 6);
//       setShowPhoto(64);
//     } else {
//       setDisplayedPhotos(displayedPhotos + 12);
//     }
//     localStorage.setItem(localStorageKey, displayedPhotos.toString());
//   };

//   const handlePhotoClick = (photo) => {
//     setSelectedPhoto(photo);
//   };

//   const handleClosePopup = () => {
//     setSelectedPhoto(null);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//       handleResize();
//       setShowButton(true);
//     }, 2000);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);


//   // console.log(displayedPhotos)
//   // console.log(showPhoto)
 

//   return (
//     <>
//       <Header />
//       <main className="main">
//         <Navigation />
//         <section className="photo-gallery">
//           <h2 className="photo-gallery__title section-title">Фотогалерея</h2>
//           {loading ? (
//             <Preloader />
//           ) : (
//             <ul className="photo-gallery__list">
//               {photoItems.slice(0, displayedPhotos).map((photo, index) => (
//                 <li key={index} className="photo-gallery__list-item">
//                   <img
//                     className="photo-gallery__list-item-image"
//                     src={photo}
//                     alt="Фото компании"
//                     onClick={() => handlePhotoClick(photo)}
//                   />
//                 </li>
//               ))}
//             </ul>
//           )}
//           {!loading &&
//             (displayedPhotos >= showPhoto ? (
//               <button className="photo-gallery__button-disabled" disabled>
//                 Смотреть больше
//               </button>
//             ) : (
//               <button
//                 className="photo-gallery__button"
//                 onClick={handleLoadMore}
//               >
//                 Смотреть больше
//               </button>
//             ))}
//         </section>
//       </main>
//       {selectedPhoto && (
//         <PhotoGalleryPopup
//           photo={selectedPhoto}
//           onClose={handleClosePopup}
//           photoItems={photoItems}
//         />
//       )}
//       <Footer />
//     </>
//   );
// }

// export default PhotoGallery;
