import React from "react";
import AboutUs from "../composants/About/AboutUs";
import Presentation from "../composants/About/Presentation";
import AboutTeam from "../composants/AboutTeam/AboutTeam";
import Footer from "../composants/Footer/Footer";
import Header from "../composants/Header/Header";
import Menu from "../composants/Menu/Menu";
import Slider from "../composants/Slider/Slider";

const Accueil = () => {
   return (
      <main style={{ overflow: "hidden" }}>
         <Header />
         <Slider />
         <Presentation />
         <AboutUs />
         <Menu />
         <AboutTeam />
         <Footer />
      </main>
   );
};

export default Accueil;
