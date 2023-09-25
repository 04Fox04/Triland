import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Licenses from "../Licenses/licenses";
import Contacts from "../Contacts/Contacts";

function App() {
  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Licenses />} />
          <Route path="/" element={<Contacts />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
