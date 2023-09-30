import React from "react";
import {
  weldingOfVariousMetalsServices,
  arcWeldingServices,
  semiAutomaticWeldingServices,
  argonWeldingServices,
} from "../../constants/constants";

function Welding() {
  return (
    <>
      <div className="services__container">
        <div className="services__container-text">
          <h3 className="services__container-text-title">
            Сварка различных металлов и их сплавов. Изготовление патрубков из
            ВЧШГ. Изготовление сварных изделий из нержавеющих сталей
          </h3>
          <p className="services__container-description">
            Наша служба сварки специализируется на соединении различных металлов
            и их сплавов с использованием передовых технологий и оборудования.
            Мы обладаем знаниями в области сварочных процессов, включая TIG, MIG
            и дуговую сварку, что позволяет нам работать с широким спектром
            материалов. Кроме того, мы предлагаем опыт в производстве труб из
            ковкого чугуна и создании сварных изделий из нержавеющей стали,
            гарантируя нашим клиентам долговечные и качественные результаты.
          </p>
        </div>
        <img
          className="services__container-image"
          src={weldingOfVariousMetalsServices}
          alt="Сварка"
        ></img>

        <img
          className="services__container-image"
          src={arcWeldingServices}
          alt="Ручная дуговая сварка"
        ></img>
        <div className="services__container-text">
          <h3 className="services__container-text-title">
            Ручная дуговая сварка
          </h3>
          <p className="services__container-description">
            Ручная дуговая сварка используется для соединения тонких
            металлических листов и труб. Она требует наличия сварочного аппарата
            и электродов.
          </p>
        </div>

        <div className="services__container-text">
          <h3 className="services__container-text-title">
            Полуавтоматическая сварка
          </h3>
          <p className="services__container-description">
            Полуавтоматическая сварка используется для сварки более толстых
            металлических листов и труб. В этом случае сварщик подает проволоку
            в сварочную горелку, которая автоматически подает ее к месту сварки.
          </p>
        </div>
        <img
          className="services__container-image"
          src={semiAutomaticWeldingServices}
          alt="Полуавтоматическая сварка"
        ></img>

        <img
          className="services__container-image"
          src={argonWeldingServices}
          alt="Аргонная сварка"
        ></img>
        <div className="services__container-text">
          <h3 className="services__container-text-title">Аргонная сварка</h3>
          <p className="services__container-description">
            Аргонная сварка используется для сварки алюминия и других цветных
            металлов. В этом случае сварочная горелка содержит неплавящийся
            электрод из вольфрама, который защищен аргоном от окисления.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welding;
