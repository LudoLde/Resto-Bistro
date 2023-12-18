import React, { useEffect, useRef } from "react";
import "../../styles/AboutUs.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const imagesAboutUs = [
   {
      image: "./AboutUs/aboutus-img1.png",
      title: "Assiettes inspirées aux dressages soignés.",
      text: "À deux pas du canal Saint-Martin, franchissez cette TO – porte en japonais – pour découvrir leur cuisine fusion franco-japonaise.",
   },
   {
      image: "./AboutUs/aboutus-img2.png",
      title: "Ô Restaurant, voilà le nom d’un savoureux restaurant côté Canal Saint-Martin.",
      text: "On file découvrir ce restaurant français aux accents nippons qui fait la part belle aux produits frais et bien préparés.",
   },
];

const AboutUs = () => {
   const articleRef = useRef();
   console.log(articleRef);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting) {
            articleRef.current.classList.add("show");
         }
      });
      observer.observe(articleRef.current);
   }, []);

   return (
      <div ref={articleRef} className="about-us-container">
         <h2>On parle de nous...</h2>
         <Fade prevArrow={<div />} nextArrow={<div />} duration={3000}>
            {imagesAboutUs.map((imageAboutUs, index) => (
               <article key={index} className="aboutus-article">
                  <img src={imageAboutUs.image} alt="logos" className="aboutus-img" />
                  <h3 className="aboutus-title">{imageAboutUs.title}</h3>
                  <p className="aboutus-para">{imageAboutUs.text}</p>
                  <button className="aboutus-btn">Lire l'Article</button>
               </article>
            ))}
         </Fade>
      </div>
   );
};

export default AboutUs;
