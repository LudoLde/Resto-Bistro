import React from "react";
import "../../styles/MenuSlider.css";
import { Fade } from "react-slideshow-image";
import "../../styles/Slider.css";
import "react-slideshow-image/dist/styles.css";

const sliderImgData = [
   {
      image: "./MenuSliderImg/menu-img1.png",
   },
   {
      image: "./MenuSliderImg/menu-img2.png",
   },
   {
      image: "./MenuSliderImg/menu-img3.png",
   },
   {
      image: "./MenuSliderImg/menu-img4.png",
   },
   {
      image: "./MenuSliderImg/menu-img5.png",
   },
];

const MenuSlider = () => {
   return (
      <div className="menu-slider-container">
         <Fade prevArrow={<div />} nextArrow={<div />}>
            {sliderImgData.map((sliderImg, index) => (
               <div className="inner-menu-slider" key={index}>
                  <img className="img-inner-slider" src={sliderImg.image} alt="dishes" />
               </div>
            ))}
         </Fade>
      </div>
   );
};

export default MenuSlider;
