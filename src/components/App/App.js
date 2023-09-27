import React, { useState } from "react";
import "../../index.css";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";

function App() {
  //стейт для открытия попапа с формой
  const [isFormOpen, setIsFormOpen] = useState(false);

  //функция открытия попапа
  const handleOpenPopupForm = () => {
    setIsFormOpen(true);
  };

  //функция закрытия попапа
  const handleClosePopupForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isFormOpen={isFormOpen}
                onOpen={handleOpenPopupForm}
                onClose={handleClosePopupForm}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
