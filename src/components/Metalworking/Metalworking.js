import React from "react";
import {
  metalProcessingServices,
  turningWorksServices,
  sketchesServices,
  millingServices,
  electricalDischargeMachiningServices,
  laserCuttingServices,
  hardeningServices,
} from "../../constants/constants";

function Metalworking() {
  return (
    <>
      <div className="services__container">
        <div className="services__container-text">
          <h3
            id="metal-processing-heading"
            className="services__container-text-title"
          >
            Механическая обработка черных и цветных металлов, а также их сплавов
            любой сложности
          </h3>
          <p className="services__container-description">
            Наше современное оборудование позволяет нам предоставлять
            высококачественные решения для обработки различных компонентов, от
            простых конструкций до сложных деталей. Будь то фрезерование,
            токарная обработка или сверление, мы обладаем опытом для
            удовлетворения конкретных требований наших клиентов. Стремясь к
            точности, эффективности и удовлетворенности клиентов, наша служба
            обработки нацелена на достижение исключительных результатов для всех
            потребностей в обработке черных и цветных металлов.
          </p>
        </div>
        <img
          className="services__container-image"
          src={metalProcessingServices}
          alt="Обработка металлов"
        />

        <img
          className="services__container-image"
          src={turningWorksServices}
          alt="Чертежи"
        />
        <div className="services__container-text" id="turning-works">
          <h3 className="services__container-text-title">
            Изготовления деталей и изделий по чертежам и эскизам заказчика
          </h3>
          <p className="services__container-description">
            Мы понимаем важность точности и аккуратности, когда речь идет о
            производстве нестандартных деталей, и наша команда квалифицированных
            специалистов стремится поставлять высококачественную продукцию,
            которая точно соответствует спецификациям наших клиентов. Будь то
            сложная конструкция или простой компонент, мы гордимся своей
            способностью выполнять требования клиентов вовремя и в рамках
            бюджета. Наше стремление к совершенству делают нас лучшим выбором
            для всех ваших потребностей в производстве деталей на заказ.
          </p>
        </div>

        <div className="services__container-text" id="sketches">
          <h3 className="services__container-text-title">Токарные работы</h3>
          <p className="services__container-description">
            Токарные работы выполняются на токарном станке, который имеет
            вращающийся режущий инструмент (токарный резец) и неподвижную
            заготовку (деталь). Во время работы заготовка вращается вокруг своей
            оси, а резец перемещается вдоль ее поверхности, удаляя материал и
            формируя нужную форму и размеры детали.
          </p>
        </div>
        <img
          className="services__container-image"
          src={sketchesServices}
          alt="Готовые изделия"
        />

        <img
          className="services__container-image"
          src={millingServices}
          alt="Фрезерование деталей"
        />
        <div className="services__container-text" id="milling">
          <h3 className="services__container-text-title">
            Фрезерование деталей любой сложности
          </h3>
          <p className="services__container-description">
            Фрезерные работы выполняются на фрезерном станке, который также
            имеет вращающийся инструмент (фрезу) и неподвижную заготовку. Во
            время работы фреза вращается вокруг своей оси, а инструмент
            перемещается вдоль заготовки, создавая требуемую форму и размер
            детали.
          </p>
        </div>

        <div
          className="services__container-text"
          id="electrical-discharge-machining"
        >
          <h3 className="services__container-text-title">
            Электроэрозионная обработка
          </h3>
          <p className="services__container-description">
            Электроэрозионная обработка металла - это процесс, при котором
            электрические разряды удаляют слой металла с поверхности заготовки
            для получения требуемой формы и размеров детали
          </p>
        </div>
        <img
          className="services__container-image"
          src={electricalDischargeMachiningServices}
          alt="Обработка изделий"
        />

        <img
          className="services__container-image"
          src={laserCuttingServices}
          alt="Резка металла"
        />
        <div className="services__container-text" id="laser-cutting">
          <h3 className="services__container-text-title">
            Лазерная резка металлов
          </h3>
          <p className="services__container-description">
            Лазерная резка металла - это один из самых современных и эффективных
            методов обработки металла. Он основан на использовании лазерного
            луча, который направляется на поверхность металла и прожигает ее.
            При этом материал расплавляется и выдувается из зоны реза, оставляя
            после себя чистый и ровный край.
          </p>
        </div>

        <div className="services__container-text" id="hardening">
          <h3 className="services__container-text-title">
            Закалка изделий из металла
          </h3>
          <p className="services__container-description">
            Закалка деталей из металла - это термическая обработка, при которой
            металл нагревается до определенной температуры, выдерживается при
            этой температуре в течение определенного времени и затем
            охлаждается. Цель закалки - повышение твердости и прочности металла.
          </p>
        </div>
        <img
          className="services__container-image"
          src={hardeningServices}
          alt="Раскаленное изделие"
        />
      </div>
    </>
  );
}

export default Metalworking;
