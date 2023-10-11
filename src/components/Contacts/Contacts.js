import React from "react";
import "./Contacts.css";
import Form from "../Form/Form";
import YaMap from "../Map/Map";

function Contacts({ isFormOpen, onOpen, onClose }) {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <h2 className="section-title contacts__title">Контакты</h2>
        <div className="contacts__container-info">
          <div className="contacts__container-text-info">
            <div className="contacts__container-items">
              <div className="contacts__container-item">
                <h3 className="contacts__title-text-info">Телефон:</h3>
                <a
                  className="contacts__text-info contacts__text-info-link contacts__text-info-tel"
                  href="tel:+7(495)-763-3470"
                >
                  +7 495 763-34-70
                </a>
              </div>
              <div className="contacts__container-item">
                <h3 className="contacts__title-text-info">Почта:</h3>
                <a
                  className="contacts__text-info contacts__text-info-link"
                  href="mailto:zakaz@gk-triland.ru"
                >
                  zakaz@gk-triland.ru
                </a>
              </div>
            </div>
            <div className="contacts__container-items">
              <div className="contacts__container-item">
                <h3 className="contacts__title-text-info">Производство:</h3>
                <p className="contacts__text-info">
                  М.О. г. Щелково ул. Браварская д.100 (территория 31-го завода
                  ГА)
                </p>
              </div>
              <div className="contacts__container-item">
                <h3 className="contacts__title-text-info">Офис:</h3>
                <p className="contacts__text-info">
                  Москва, Дмитровское шоссе, д. 100, оф. 1, ком. 31, пом. I, эт.
                  4
                </p>
              </div>
            </div>
            <div className="contacts__container-items">
              <div className="contacts__container-item">
                <h3 className="contacts__title-text-info">
                  Режим работы офиса:
                </h3>
                <p className="contacts__text-info contacts__title-text-info-mode">
                  С 10:00 до 18:00 без обеда
                </p>
              </div>
              <div className="contacts__container-item">
                <button className="contacts__button" onClick={onOpen}>
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
          <div className="contacts__container-map">
            <YaMap />
          </div>
        </div>
      </div>
      {isFormOpen && <Form onClose={onClose} />}
    </section>
  );
}

export default Contacts;
