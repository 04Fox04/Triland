import React from "react";
import "./ContactsPage.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import YaMap from "../Map/Map";

function ContactsPage({ isFormOpen, onOpen, onClose }) {
  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section className="contacts-page">
          <div className="contacts-page__container">
            <h2 className="section-title contacts-page__title">Контакты</h2>
            <div className="contacts-page__container-info">
              <div className="contacts-page__container-text-info">
                <div className="contacts-page__container-first-text-info">
                  <h3 className="contacts-page__title-text-info">
                    Производство:
                  </h3>
                  <p className="contacts-page__text-info">
                    М.О. г. Щелково ул. Браварская д.100 <br /> (территория
                    31-го завода ГА)
                  </p>
                  <h3 className="contacts-page__title-text-info">Офис:</h3>
                  <p className="contacts-page__text-info">
                    Москва, Дмитровское шоссе, д. 100, оф. 1, ком. 31, пом. I,
                    эт. 4
                  </p>
                  <h3 className="contacts-page__title-text-info">
                    Режим работы офиса:
                  </h3>
                  <p className="contacts-page__text-info">
                    С 10:00 до 18:00 без обеда
                  </p>
                  <button className="contacts-page__button" onClick={onOpen}>
                    Заказать звонок
                  </button>
                </div>
                <div className="contacts-page__container-second-text-info">
                  <h3 className="contacts-page__title-text-info">Телефон:</h3>
                  <a
                    className="contacts-page__text-info contacts-page__text-info-link contacts-page__text-info-tel"
                    href="tel:+7(495)-763-3470"
                  >
                    +7 495 763-34-70
                  </a>
                  <h3 className="contacts-page__title-text-info">Почта:</h3>
                  <a
                    className="contacts-page__text-info contacts-page__text-info-link contacts-page__text-info-mail"
                    href="mailto:zakaz@gk-triland.ru"
                  >
                    zakaz@gk-triland.ru
                  </a>
                </div>
                <div className="contacts-page__container-third-text-info">
                  <h3 className="contacts-page__title-text-info">
                    Отдел снабжения:
                  </h3>
                  <a
                    className="contacts-page__text-info contacts-page__text-info-link"
                    href="mailto:snab@gk-triland.ru"
                  >
                    snab@gk-triland.ru
                  </a>
                  <h3 className="contacts-page__title-text-info">
                    Бухгалтерия:
                  </h3>
                  <a
                    className="contacts-page__text-info contacts-page__text-info-link"
                    href="mailto:book@gk-triland.ru"
                  >
                    book@gk-triland.ru
                  </a>
                </div>
              </div>
              <div className="contacts-page__container-map">
                <YaMap />
              </div>
            </div>
          </div>
          {isFormOpen && <Form onClose={onClose} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactsPage;
