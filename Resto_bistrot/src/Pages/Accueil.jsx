import React from "react";
import AboutUs from "../composants/About/AboutUs";
import Presentation from "../composants/About/Presentation";
import Header from "../composants/Header/Header";
import Slider from "../composants/Slider/Slider";

const Accueil = () => {
   return (
      <main>
         <Header />
         <Slider />
         <Presentation />
         <AboutUs />
      </main>
   );
};

export default Accueil;
