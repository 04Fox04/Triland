import React from "react";
import "./Promo.css"
import "../../vendor/fonts/fonts.css"
import Man from "../../images/main-man.png";


function Promo() {

    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__info">
                    <h2 className="promo__title">Создавайте шедевры с помощью профессиональной металлообработки<br/> и сварки</h2>
                    <p className="promo__subtitle">Изготовление и сварка металлоизделий любой сложности </p>
                    <button className="promo__button">Заказать звонок</button>
                </div>
                <img src={Man} className="promo__image" alt="Фото сотрудника" />
            </div>
        </section>
    )
}

export default Promo;
