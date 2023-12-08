import React from "react";
import data from "../../Slider.json";

const Slider = () => {
   const imgSlider = data;
   console.log(imgSlider);

   return (
      <div className="slider-container">
         {imgSlider.map((index) => (
            <div className="slider" key={index.id}>
               <img className="slider_img" src={index.image} />
            </div>
         ))}
      </div>
   );
};

export default Slider;
