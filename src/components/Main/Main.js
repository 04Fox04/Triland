import React from "react"
import Header from "../Header/Header";
import Promo from "../Promo/Promo"
import Footer from "../Footer/Footer";
import Licenses from "../Licenses/licenses";
import Contacts from "../Contacts/Contacts";

function Main() {

  return (
    <>
      <Header />
        <main className="main">
          <Promo />
          <Licenses />
          <Contacts />
        </main>
        <Footer />
    </>
  );
}

export default Main;
