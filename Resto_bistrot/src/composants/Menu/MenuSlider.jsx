import React from "react";
import "../../styles/MenuSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
   const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000, // Défilement automatique toutes les 3 secondes
   };

   return (
      <div className="menu-slider-container">
         <Slider {...settings}>
            {sliderImgData.map((sliderImg, index) => (
               <div key={index} className="slider">
                  <img src={sliderImg.image} className="menu-slider-img" />
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default MenuSlider;
