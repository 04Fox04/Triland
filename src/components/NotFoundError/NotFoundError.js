import React from "react";
import "./NotFoundError.css";
import { useNavigate } from "react-router-dom";

function NotFoundError() {
  const navigate = useNavigate();
  return (
    <section className="error">
      <div className="error__container">
        <h2 className="error__container-title">404</h2>
        <p className="error__container-text">Страница не найдена</p>
        <button
          to="/"
          className="error__container-button"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    </section>
  );
}

export default NotFoundError;
