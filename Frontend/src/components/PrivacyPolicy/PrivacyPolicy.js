import React from "react";
import "./PrivacyPolicy.css";
import "../../index.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <section className="privacy-policy">
        <Navigation />
        <h2 className="privacy-policy__title section-title">
          Политика конфиденциальности
        </h2>
        <div className="privacy-policy__container">
          <p className="privacy-policy__container-date privacy-policy__container-item-text">
            Последнее обновление: 26.10.2023г.
          </p>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">Введение</h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Данная политика конфиденциальности объясняет, как ООО "Триланд"
              (далее "Мы", "Наша компания" или "Наш сайт") собирает, использует
              и защищает информацию, предоставляемую пользователями (далее "Вы"
              или "Пользователи") при использовании нашего веб-сайта
              https://триланд.рф (далее "Сайт"). Мы придерживаемся строгих
              принципов конфиденциальности и обязуемся защищать личные данные
              наших пользователей.
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Собираемая информация
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Мы можем собирать следующую информацию о пользователях Сайта:
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              1. Личная информация
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Имя и фамилия
            </p>
            <p className="privacy-policy__container-item-text">
              Адрес электронной почты
            </p>
            <p className="privacy-policy__container-item-text">
              Номер телефона
            </p>
            <p className="privacy-policy__container-item-text">
              Другие персональные данные, которые вы предоставляете добровольно.
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              2. Информация о действиях на сайте
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Мы можем собирать информацию о вашей активности на Сайте, такую
              как:
            </p>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Информация о просмотренных страницах
            </p>
            <p className="privacy-policy__container-item-text">
              Время и дата посещения
            </p>
            <p className="privacy-policy__container-item-text">
              Интеракции с Сайтом (например, нажатия на кнопки или заполнение
              форм)
            </p>
            <p className="privacy-policy__container-item-text">
              Информация о браузере и устройстве, используемых для доступа к
              Сайту
            </p>
            <p className="privacy-policy__container-item-text">
              Использование собранной информации.
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Мы используем собранную информацию для следующих целей:
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Обеспечение работы Сайта: Мы используем информацию для обработки
              запросов, обеспечения функциональности Сайта и предоставления вам
              доступа к его разделам.
            </p>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Связь с вами: Мы можем использовать вашу электронную почту или
              номер телефона для связи с вами в отношении вашей активности на
              Сайте, вопросов обратной связи или информационных рассылок, если
              вы подписались на них.
            </p>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Персонализация опыта: Мы можем использовать информацию о вашей
              активности на Сайте для персонализации предложений, контента и
              рекомендаций в соответствии с вашими интересами.
            </p>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Анализ и улучшение Сайта: Мы анализируем информацию о действиях
              пользователей, чтобы улучшать качество и функциональность Сайта, а
              также собирать статистическую информацию для наших внутренних
              нужд.
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Защита личных данных
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Мы прилагаем максимум усилий для обеспечения безопасности вашей
              личной информации. Мы используем разнообразные технические и
              организационные меры для защиты данных от несанкционированного
              доступа, раскрытия, изменения или уничтожения. Тем не менее,
              никакая система передачи данных через интернет или хранения данных
              не является 100% защищенной, поэтому мы не можем гарантировать
              абсолютную безопасность вашей информации.
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Раскрытие информации третьим лицам
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Мы не продаем, не обмениваем и не передаем вашу личную информацию
              третьим лицам без вашего согласия, за исключением случаев,
              предусмотренных законом
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Ссылки на сторонние сайты
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Сайт может содержать ссылки на сторонние веб-сайты. Мы не несем
              ответственности за политику конфиденциальности или содержание
              таких веб-сайтов. Рекомендуется ознакомиться с политикой
              конфиденциальности каждого стороннего сайта, который вы посещаете.{" "}
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Согласие с политикой конфиденциальности
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Посещая и использование нашего Сайта, вы выражаете свое согласие с
              нашей политикой конфиденциальности.
            </p>
          </div>
          <div className="privacy-policy__container-item">
            <h3 className="privacy-policy__container-item-title">
              Обратная связь и контакты
            </h3>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Если у вас есть вопросы или предложения относительно нашей
              политики конфиденциальности, пожалуйста, свяжитесь с нами по
              следующим контактным данным:
            </p>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              Info@gk-triland.ru
            </p>
            <p className="privacy-policy__container-item-text privacy-policy__container-item-text-gap">
              26.10.2023г.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
