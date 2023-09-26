import React from "react"
import Header from "../Header/Header";
import Promo from "../Promo/Promo"
import AboutCompany from "../AboutCompany/AboutCompany"
import Footer from "../Footer/Footer";
import Licenses from "../Licenses/licenses";
import Contacts from "../Contacts/Contacts";

function Main() {

  return (
    <>
      <Header />
        <main className="main">
          <Promo />
          <AboutCompany/>
          <Licenses />
          <Contacts />
        </main>
        <Footer />
    </>
  );
}

export default Main;
