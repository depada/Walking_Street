import React, { useState, useEffect } from "react";
import "../styles/RotatingStyles.css";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import kitchen3 from "../assets/kitchen3.jpg";
import kitchen4 from "../assets/kitchen4.jpg";
import kitchen5 from "../assets/kitchen5.jpg";
import kitchen6 from "../assets/kitchen6.jpg";
import kitchen7 from "../assets/kitchen7.jpg";
import kitchen8 from "../assets/kitchen8.jpg";
import { useCarousel } from "../context/Context";

export const imgArr = [
  kitchen1,
  kitchen2,
  kitchen3,
  kitchen4,
  kitchen5,
  kitchen6,
  kitchen7,
  kitchen8,
];
const SLIDES = imgArr.length - 1;
const Card = ({ img, prevSlide, nextSlide }) => (
  <div style={{ filter: "none" }} className="card">
    <img src={img} />
  </div>
);

const Carousel = ({ children, active, prevSlide, nextSlide }) => {
  return (
    <div className="carousel">
      {/* {active > 0 && (
        <button className="nav left" onClick={prevSlide}>
          <TiChevronLeftOutline />
        </button>
      )} */}
      <div className="mini-image-container">
        {imgArr.slice(active + 1, active + 4).map((img, i) => {
          return <img key={i} src={img} className="mini-image" />;
        })}
      </div>
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= 2 ? "0" : "1",
            display: Math.abs(active - i) > 2 ? "none" : "block",
          }}
        >
          {React.cloneElement(child, { prevSlide, nextSlide })}
        </div>
      ))}
      {/* {active < SLIDES - 1 && (
        <button className="nav right" onClick={nextSlide}>
          <TiChevronRightOutline />
        </button>
      )} */}
    </div>
  );
};

const RotatingSlider = () => {
  const { activeImage, setActiveImage } = useCarousel();
  const [active, setActive] = useState(0);
  console.log("active==>", active);
  const prevSlide = () => {
    if (active === 0) {
      // If at the first slide, wrap to the last slide
      setActive(SLIDES);
      setActiveImage(imgArr[SLIDES]);
    } else {
      setActive(active - 1);
      setActiveImage(imgArr[active]);
    }
  };

  const nextSlide = () => {
    if (active === SLIDES) {
      // If at the last slide, wrap to the first slide
      setActive(0);
      setActiveImage(imgArr[2]);
    } else {
      setActive(active + 1);
      console.log("acriveImage==>", activeImage);
      setActiveImage(imgArr[active + 2]);
    }
  };

  return (
    <div className="rotating-slider">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${activeImage})`,
        }}
      ></div>
      <div className="spinner">
        {" "}
        <Carousel active={active} prevSlide={prevSlide} nextSlide={nextSlide}>
          {imgArr.map((img, i) => {
            return <Card key={i} img={img} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default RotatingSlider;
