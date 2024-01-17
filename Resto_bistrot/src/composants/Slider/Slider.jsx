import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "../../styles/Slider.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
   {
      url: "./Slider/img-slider1.png",
      text: "Votre nouvelle expérience culinaire à Paris",
   },
   {
      url: "./Slider/img-slider2.png",
      text: "Un cadre élégant, design et romantique",
   },
   {
      url: "./Slider/img-slider3.png",
      text: "La prommesse d'un voyage inédit entre Paris et Tokyo",
   },
];

const Slider = () => {
   return (
      <div className="slide-container">
         <Fade prevArrow={<div />} nextArrow={<div />} style={{ width: "100vh" }}>
            {fadeImages.map((fadeImage, index) => (
               <div className="slider" key={index}>
                  <img className="slider-img" src={fadeImage.url} />
                  <h2 className="text-overlay">{fadeImage.text}</h2>
                  <button className="btn-slider">Réservez votre table</button>
               </div>
            ))}
         </Fade>
      </div>
   );
};

export default Slider;
