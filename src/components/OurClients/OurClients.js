import React from "react";
import "./OurClients.css";
import "../../index.css";
import OurClientsCarousel from "../OurClientsCarousel/OurClientsCarousel";
import {
  moek,
  mosvodokanal,
  mosvodostok,
  nst,
  pik,
  rosneft,
  rusHydro,
} from "../../constants/constants";

function OurClients() {
  return (
    <section className="our-clients">
      <div className="our-clients__container">
        <h2 className="section-title our-clients__title">Наши клиенты</h2>
        <OurClientsCarousel>
          <img
            className="our-clients__client-logo"
            src={mosvodokanal}
            alt="Логотип Мосводоканала"
          />
          <img
            className="our-clients__client-logo"
            src={mosvodostok}
            alt="Логотип Мосводостока"
          />
          <img
            className="our-clients__client-logo"
            src={rusHydro}
            alt="Логотип РусГидро"
          />
          <img
            className="our-clients__client-logo"
            src={pik}
            alt="Логотип ПИК"
          />
          <img
            className="our-clients__client-logo"
            src={moek}
            alt="Логотип МОЭК"
          />
          <img
            className="our-clients__client-logo"
            src={nst}
            alt="Логотип НСТ"
          />
          <img
            className="our-clients__client-logo"
            src={rosneft}
            alt="Логотип Роснефть"
          />
        </OurClientsCarousel>
      </div>
    </section>
  );
}

export default OurClients;
