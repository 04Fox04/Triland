import React from "react";
import "./AboutCompany.css";
import "../../index.css";
import { Link } from "react-router-dom";
import CarouselAboutCompany from "../CarouselAboutCompany/CarouselAboutCompany";
import {
  slideOne,
  slideTwo,
  slideThree,
  arrowSlid,
} from "../../constants/constants";

function AboutCompany({ onOpen }) {
  return (
    <section className="about-company">
      <div className="about-company__container">
        <div className="about-company__info">
          <h2 className="section-title about-company__title">О компании</h2>
          <div className="about-company__border"></div>
          <p className="about-company__text">
            Основным видом деятельности компании является строительство и монтаж
            инженерных сетей водоснабжения, канализации, теплоснабжения жилых и
            промышленных зданий, а также продажа и установка автоматизированной
            трубопроводной арматуры от лучших производителей.
          </p>
          <p className="about-company__text">
            В компании работают высококвалифицированные сотрудники,
            специализирующиеся на сварочно-сантехнических работах.
          </p>
          <p className="about-company__text">
            За долгие годы работы в данной области коллектив компании «Триланд»
            сталкивался с множеством сложностей и отлично справлялся с их
            выполнением.
          </p>
          <button className="about-company__button" onClick={onOpen}>
            Заказать звонок
          </button>
        </div>
        <div className="about-company__slider">
          <CarouselAboutCompany>
            <img src={slideOne} className="item" alt="" />
            <img src={slideTwo} className="item" alt="" />
            <img src={slideThree} className="item" alt="" />
            <div className="about-company__slid">
              <div className="slid__container">
                <h3 className="slid__text">Перейти в галерею</h3>
                <Link to="*">
                  <button className="slid__button">
                    <img
                      className="slid__arrow"
                      src={arrowSlid}
                      alt="Стрелка"
                    ></img>
                  </button>
                </Link>
              </div>
            </div>
          </CarouselAboutCompany>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
