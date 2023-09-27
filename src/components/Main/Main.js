import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutCompany from "../AboutCompany/AboutCompany";
import Footer from "../Footer/Footer";
import Licenses from "../Licenses/licenses";
import Contacts from "../Contacts/Contacts";
import Services from "../Services/Services";

function Main({ isFormOpen, onOpen, onClose }) {
  return (
    <>
      <Header />
      <main className="main">
        <Promo isFormOpen={isFormOpen} onOpen={onOpen} onClose={onClose} />
        <AboutCompany
          isFormOpen={isFormOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
        <Services />
        <Licenses />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default Main;
