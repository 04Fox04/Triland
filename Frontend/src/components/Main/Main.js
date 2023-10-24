import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutCompany from "../AboutCompany/AboutCompany";
import Footer from "../Footer/Footer";
import Licenses from "../Licenses/licenses";
import Contacts from "../Contacts/Contacts";
import OurServices from "../OurServices/OurServices";
import OurClients from "../OurClients/OurClients";

function Main({
  isFormOpen,
  onOpen,
  onClose,
  isPopupImageOpen,
  imageSrc,
  imageAlt,
  onOpenPopupLicense,
  onClosePopupLicense,
  onButtonClick
}) {
  return (
    <>
      <Header />
      <main className="main">
        <Promo isFormOpen={isFormOpen} onOpen={onOpen} onClose={onClose} />
        <AboutCompany
          onOpen={onOpen}
        />
        <OurServices onButtonClick={onButtonClick} />
        <Licenses
          isPopupImageOpen={isPopupImageOpen}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          onOpenPopupLicense={onOpenPopupLicense}
          onClosePopupLicense={onClosePopupLicense}
        />
        <OurClients />
        <Contacts onOpen={onOpen} />
      </main>
      <Footer />
    </>
  );
}

export default Main;
