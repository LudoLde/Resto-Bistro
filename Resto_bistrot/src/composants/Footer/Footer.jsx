import React from "react";
import "../../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
   return (
      <footer className="footer-container">
         <img src="./images/logo-to.png" alt="logo-to" />
         <p>
            <span>Une visite s'impose</span>
            <br />
            Un moment Bistronomique dans un restaurant unique à Paris
         </p>
         <p>
            <span>34, Rue Beaurepaire, 75010 Paris </span>Ouvert tous les jours de 12h00 à 14h30 et de 19h00 à 22h30
         </p>
         <p>Tel : 01 40 37 39 12</p>
         <p>
            Privatisation Groupes : <a>torestaurantparis@gmail.com</a>
         </p>
         <div className="social-medias">
            <p className="youtube">
               <FontAwesomeIcon icon={faYoutube} className="medias-design" />
            </p>
            <p className="facebook">
               <FontAwesomeIcon icon={faFacebook} className="medias-design" />
            </p>

            <p className="instagram">
               <FontAwesomeIcon icon={faInstagram} className="medias-design" />
            </p>
         </div>
         <p className="rights">
            2023 Restaurant TO | <a href="#">Politique de Confidentialité & Mentions Légales</a> | Conception site Web :{" "}
            <a href="#">Ludzy</a>
         </p>
      </footer>
   );
};

export default Footer;
