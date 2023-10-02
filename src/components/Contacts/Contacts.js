import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./Contacts.css";

function Contacts({ onOpen }) {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <h2 className="section-title contacts__title">Контакты</h2>
        <div className="contacts__container-info">
          <div className="contacts__container-text-info">
            <h3 className="contacts__title-text-info">Телефон:</h3>
            <a
              className="contacts__text-info contacts__text-info-link contacts__text-info-tel"
              href="tel:+7(495)-763-3470"
            >
              +7 495 763-34-70
            </a>
            <h3 className="contacts__title-text-info">Почта:</h3>
            <a
              className="contacts__text-info contacts__text-info-link"
              href="mailto:zakaz@gk-triland.ru"
            >
              zakaz@gk-triland.ru
            </a>
            <h3 className="contacts__title-text-info">Производство:</h3>
            <p className="contacts__text-info">
              М.О. г. Щелково ул. Браварская д.100 <br /> (территория 31-го
              завода ГА)
            </p>
            <h3 className="contacts__title-text-info">Офис:</h3>
            <p className="contacts__text-info">
              Москва, Дмитровское шоссе, д. 100, оф. 1, ком. 31, пом. I, эт. 4
            </p>
            <h3 className="contacts__title-text-info">Режим работы офиса:</h3>
            <p className="contacts__text-info">С 10:00 до 18:00 без обеда</p>
            <button className="contacts__button" onClick={onOpen}>
              Заказать звонок
            </button>
          </div>
          <div className="contacts__container-map">
            <YMaps
              style={{
                maxWidth: "650px",
                height: "665px",
                borderRadius: "20px",
              }}
            >
              <Map
                defaultState={{ center: [55.916254, 37.746729], zoom: 10 }}
                style={{ width: "100%", height: "665px" }}
              >
                <Placemark
                  geometry={[55.945629, 37.95613]}
                  options={{
                    iconColor: "#34abeb", // цвет отметки
                    preset: "islands#blueHomeIcon", // стиль отметки
                  }}
                />
                <Placemark
                  geometry={[55.881626, 37.545617]}
                  options={{
                    iconColor: "#34abeb", // цвет отметки
                    preset: "islands#blueHomeIcon", // стиль отметки
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
