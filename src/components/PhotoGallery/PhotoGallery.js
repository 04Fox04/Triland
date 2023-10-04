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
  // стейт для отображения кнопки
  const [showButton, setShowButton] = useState(false);

  // обработчик клика | при клике добавляется еще 6 фотографий
  const handleLoadMore = () => {
    setDisplayedPhotos(displayedPhotos + 12);
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
          {showButton && (
            <button
              className={`${
                displayedPhotos === 66
                  ? "photo-gallery__button-disabled"
                  : "photo-gallery__button"
              }`}
              onClick={handleLoadMore}
            >
              Смотреть больше
            </button>
          )}
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
