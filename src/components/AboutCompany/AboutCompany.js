import React from "react";
import "./AboutCompany.css";
import "../../index.css";
import { Link } from "react-router-dom";
import ArrowSlid from "../../images/about-company/arrow.svg";

function AboutCompany() {
  return (
    <section className="about__company">
      <div className="about__company-container">
        <div className="about__company-info">
          <h2 className="section-title about__company-title">О компании</h2>
          <div className="about__company-border"></div>
          <p className="about__company-text">
            Основным видом деятельности компании является строительство и монтаж
            инженерных сетей водоснабжения, канализации, теплоснабжения жилых и
            промышленных зданий, а также продажа и установка автоматизированной
            трубопроводной арматуры от лучших производителей.
          </p>
          <p className="about__company-text">
            В компании работают высококвалифицированные сотрудники,
            специализацией которых являются сварочно-сантехнические работы.
          </p>
          <p className="about__company-text">
            За долгие годы работы в данной области коллектив компании «Триланд»
            сталкивался с множеством сложностей и при этом отлично справлялся с
            их выполнением.
          </p>
          <button className="about__company-button">Заказать звонок</button>
        </div>
        <div className="about__company-slider">
          {/* <img className="about__company-image" src="" alt="Фото с производства"></img> */}
          <div className="about__company-slid">
            <div className="slid__container">
              <h3 className="slid__text">Перейти в галерею</h3>
              <Link to="*">
                <button className="slid__button">
                  <img
                    className="slid__arrow"
                    src={ArrowSlid}
                    alt="Стрелка"
                  ></img>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
