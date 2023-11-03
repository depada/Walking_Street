import React from "react";

const Hero = () => {
  return <div style={{ height: "120vh", width: "100vw" }}>Hero</div>;
};

export default Hero;
// import React, { useEffect, useState } from "react";
// import "../styles/Hero.css";
// import RotatingSlider from "./RotatingSlider";
// import { useCarousel } from "../context/Context";

// const Hero = () => {
//   const { activeImage } = useCarousel();
//   const [backgroundImage, setBackgroundImage] = useState(activeImage || image);

//   useEffect(() => {
//     // Update the background image with a smooth transition when activeImage changes
//     if (activeImage) {
//       setBackgroundImage(activeImage);
//     }
//   }, [activeImage]);

//   const updateMainImage = (imageURL) => {
//     // Update the background image of the main image
//     setBackgroundImage(imageURL);
//   };

//   return (
//     <div id="hero-container" className="hero-container">
//       <div
//         className="hero-background"
//         style={{
//           height: "100vh",
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           transition: "background-image 1.3s ease-in-out", // Smooth background transition
//         }}
//       />
//       <RotatingSlider updateMainImage={updateMainImage} />
//     </div>
//   );
// };

// export default Hero;
