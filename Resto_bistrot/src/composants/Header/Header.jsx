import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
   const [showLinks, setShowLinks] = useState(false);

   const handleShowLinks = () => {
      setShowLinks(!showLinks);
   };
   return (
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
         <Link to="/" className="navbar-logo ">
            <span className="hidden-text">logo LudovicLabaude</span>
            <FontAwesomeIcon icon={faL} />
            <FontAwesomeIcon icon={faL} className="fa-flip-vertical fa-flip-horizontal " />
         </Link>
         <ul className="navbar__links">
            <li className="navbar__item">
               <Link to="/" className="navbar__link">
                  Accueil
               </Link>
            </li>
            <li className="navbar__item">
               <a to="/restaurant" className="navbar__link">
                  Restaurant
               </a>
            </li>
            <li className="navbar__item">
               <a to="/menu" className="navbar__link">
                  Menu
               </a>
            </li>
            <li className="navbar__item">
               <a to="/reservation" className="navbar__link">
                  Réservation
               </a>
            </li>
         </ul>
         <button className="navbar__burger" onClick={handleShowLinks}>
            <span className="navbar__bar"></span>
         </button>
      </nav>
   );
};

export default Header;
