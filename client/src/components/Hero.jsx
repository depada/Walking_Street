import React, { useState } from "react";
import "../styles/Hero.css";
import RotatingSlider, { imgArr } from "./RotatingSlider";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(imgArr[0]); // Initialize with the first image

  const handleSlideChange = (imgSrc) => {
    setBackgroundImage(imgSrc);
  };

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <RotatingSlider onSlideChange={handleSlideChange} />
    </div>
  );
};

export default Hero;
