import React from "react";
import "./AboutCompany.css";
import "../../index.css";
import CarouselAboutCompany from "../CarouselAboutCompany/CarouselAboutCompany";
import {
  slideOne,
  slideTwo,
  slideThree,
  slideFour,
  arrowSlid,
} from "../../constants/constants";

function AboutCompany({ onOpen }) {
  return (
    <section className="about-company" id="about-company">
      <div className="about-company__container">
        <div className="about-company__info">
          <h2 className="section-title about-company__title">О компании</h2>
          <div className="about-company__border"></div>
          <p className="about-company__text">
            Компания «Триланд» специализируется на высокоточной металлообработке
            на станках в том числе с ЧПУ. Штучном и серийном изготовлении
            деталей из различных видов чёрных и цветных металлов. Выполняет
            комплекс работ от проектирования, до готового изделия.
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
            <img src={slideFour} className="item" alt="" />
            <div className="about-company__slid">
              <div className="about-company__slid-container">
                <h3 className="about-company__slid-container-text">
                  Перейти в галерею
                </h3>
                <a
                  href="/photo-gallery"
                  className="about-company__slid-container-button"
                >
                  <img
                    className="about-company__slid-container-button-arrow"
                    src={arrowSlid}
                    alt="Стрелка"
                  ></img>
                </a>
              </div>
            </div>
          </CarouselAboutCompany>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
