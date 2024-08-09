import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useLocation } from "react-router-dom";

function YaMap() {
  const location = useLocation();

  const MapRoute = () => {
    return location.pathname === "/";
  };

  const classNameMap = MapRoute() ? "contacts__map" : "contacts-page__map";

  return (
    <>
      <YMaps>
        <Map
          defaultState={{ center: [55.916254, 37.746729], zoom: 9 }}
          className={classNameMap}
        >
          <Placemark
            geometry={[56.260208, 38.009597]}
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
    </>
  );
}

export default YaMap;
