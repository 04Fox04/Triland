import React, { useState } from "react";
import Header from "../Header/Header";
import "./PhotoGallery.css";
import "../../index.css";
import Navigation from "../Navigation/Navigation";
import { photoItems } from "../../constants/constants";
import PhotoGalleryPopup from "../PhotoGalleryPopup/PhotoGalleryPopup";
import Footer from "../Footer/Footer";

function PhotoGallery() {
  // стейт для отображение дефолтного кол-ва фотографий
  const [displayedPhotos, setDisplayedPhotos] = useState(30);
  // стейт для открытия/закрытия попапа
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section className="photo-gallery">
          <h2 className="photo-gallery__title section-title">Фотогалерея</h2>
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
