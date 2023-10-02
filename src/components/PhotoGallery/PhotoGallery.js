import React, { useState,  } from "react";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import "./PhotoGallery.css";
import "../../index.css";
import { photoItem } from "../../constants/constants";

function PhotoGallery() {
  // стейт для отображение дефолтного кол-ва фотографий
  const [displayedPhotos, setDisplayedPhotos] = useState(30);

  // обработчик клика | при клике добавляется еще 6 фотографий
  const handleLoadMore = () => {
    console.log(displayedPhotos);
    setDisplayedPhotos(displayedPhotos + 12);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section className="photo-gallery">
          <h2 className="photo-gallery__title section-title">Фотогалерея</h2>
          <ul className="photo-gallery__list">
            {photoItem.slice(0, displayedPhotos).map((photo, index) => (
              <li key={index} className="photo-gallery__list-item">
                <img
                  className="photo-gallery__list-item-image"
                  src={photo}
                  alt="Фото компании"
                />
              </li>
            ))}
          </ul>
          <button
            className={`${
                displayedPhotos === 66 ? "photo-gallery__button-disabled" : "photo-gallery__button"
            }`}
            onClick={handleLoadMore}
          >
            Смотреть больше
          </button>
        </section>
      </main>
    </>
  );
}

export default PhotoGallery;
