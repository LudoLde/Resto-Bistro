import React from "react";
import "../../styles/Menu.css";
import MenuSlider from "./MenuSlider";

const Menu = () => {
   return (
      <section className="section-menu">
         <MenuSlider />
         <div className="menu-container">
            <h2>OMAKASE</h2>
            <h3>Un menu carte blanche</h3>
            <div className="menu-container-infos">
               <p className="menu-container-infos-para">
                  <span>Tous les soirs au dîner et déjeuners du Samedi et Dimanche</span>, le restaurant parisien fusion TO applique la
                  tradition de "Omakase" - "je m'en remets à vous" en japonais - en laissant au chef le soin de choisir le menu de ses
                  clients.
               </p>
            </div>
            <div className="menu-dishes">
               <div className="menu-dishes-info">
                  <p>
                     <span className="menu-name">4 étapes </span>
                     <span className="menu-name-details">(pour l'ensemble de la table)</span>{" "}
                     <span className="menu-price">............... 75</span>
                  </p>
                  <p className="menu-dishes-details">Amuse-bouche, entrée, poisson, viande, dessert</p>
               </div>
               <div className="menu-dishes-info">
                  <p>
                     <span className="menu-name">6 étapes</span> <span className="menu-name-details">(pour l'ensemble de la table)</span>{" "}
                     <span className="menu-price">............... 95</span>
                  </p>
                  <p className="menu-dishes-details">Amuse-bouche, 2 entrées, poisson, viande, pré desert, dessert</p>
               </div>
               <div className="menu-dishes-info">
                  <p>
                     <span className="menu-name">Prestige</span> <span className="menu-name-details">(pour l'ensemble de la table)</span>{" "}
                     <span className="menu-price">............... 125</span>
                  </p>
                  <p className="menu-dishes-details">Amuse-bouche, 3 entrées, homard, viande, pré dessert, dessert</p>
               </div>
            </div>
            <button className="btn-show-menu">Voir Notre Menu</button>
         </div>
      </section>
   );
};

export default Menu;
