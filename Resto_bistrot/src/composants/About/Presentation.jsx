import React from "react";
import "../../styles/Presentation.css";

const Presentation = () => {
   return (
      <div className="presentation-container">
         <h2 className="presentation-title">Le restaurant bistronomique de Paris</h2>
         <p className="presentation-para">
            Installé dans un immeuble aux allures d’hôtel parisien élégant, le restaurant TO vous invite à la découverte d’une{" "}
            <span>cuisine bistronomique française</span> aux influences japonaises.
            <br />
         </p>
         <p className="presentation-para2">
            À l'intérieur du restaurant: <span>3 ambiances</span> au design chic et épuré.
         </p>
      </div>
   );
};

export default Presentation;
