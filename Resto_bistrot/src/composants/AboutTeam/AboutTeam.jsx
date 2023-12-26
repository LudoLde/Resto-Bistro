import React from "react";
import { useRef, useEffect } from "react";
import "../../styles/AboutTeam.css";

const AboutTeam = () => {
   const observeElement = (element, className) => {
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting) {
            element.classList.add(className);
         }
      });
      observer.observe(element);
   };

   const element1 = useRef();
   const element2 = useRef();

   useEffect(() => {
      if (element1.current) {
         observeElement(element1.current, "show-element1");
      }
      if (element2.current) {
         observeElement(element2.current, "show-element2");
      }
      // Vous pouvez ajouter d'autres éléments ici en utilisant la même logique
   }, []);

   return (
      <section className="section-about-team">
         <img ref={element1} className="img-showed" src="./images/img-bottle-of-wine.png" alt="bottle-of-wine" />
         <div ref={element2} className="first-part">
            <h2 className="first-part-title">Une équipe à votre service</h2>
            <p>
               Toute l'équipe du restaurant TO est ravie de vous accueillir pour vous faire passer le meilleur des moments bistronomiques.
            </p>
            <p>
               Notre <span>chef et sa brigade </span>œuvrent dans la cuisine ouverte en face du salon particulier de l'étage inférieur.
            </p>
            <p>
               En salle, tout le personnel en style <span> dandy chic: </span>bretelles, nœud papillon et cravate noire sont aux petits
               soins et prêt à repondre à toutes vos demandes
            </p>
         </div>
         <div className="second-part">
            <img src="./images/img-resto-interieur.png" />
            <h3 className="second-part-title">Une expérience gustative unique en plein cœur de Paris</h3>
            <p>
               Le restaurant TO vous propose sa <span>cuisine bistronomique Fusion</span> midi et soir. Pour le dîner, découvrez tout le
               savoir faire de notre chef avec la tradition du Omakase : un <span> menu carte blanche </span>en 8 services
            </p>
            <button className="btn-about-restaurant">Découvrez le restaurant</button>
         </div>
      </section>
   );
};
export default AboutTeam;
