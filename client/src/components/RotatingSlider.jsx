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
import kitchen8 from "../assets/kitchen8.jpg"; // Number of slides in the rotating slider

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
const SLIDES = imgArr.length;
const Card = ({ img, onClick }) => (
  <div onClick={onClick} className="card">
    <img src={img} />
    {/* <h2>{title}</h2>
    <p>{content}</p> */}
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const prevSlide = () => {
    setActive((active - 1 + SLIDES) % SLIDES);
  };

  const nextSlide = () => {
    setActive((active + 1) % SLIDES);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((active + 1) % SLIDES);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [active]);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={prevSlide}>
          <TiChevronLeftOutline />
        </button>
      )}
      f
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= 2 ? "0" : "1", // Adjust visibility
            display: Math.abs(active - i) > 2 ? "none" : "block", // Adjust visibility
          }}
        >
          {child}
        </div>
      ))}
      {active < SLIDES - 1 && (
        <button className="nav right" onClick={nextSlide}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

// const RotatingSlider = () => {
//   return (
//     <div className="rotating-slider">
//       <Carousel>
//         {imgArr.map((img, i) => (
//           <Card
//             key={i}
//             onClick={() => console.log("clicked")}
//             // title={`Slide ${i + 1}`}
//             // content={`Content for Slide ${i + 1}`}
//             img={img}
//           />
//         ))}
//       </Carousel>
//     </div>
//   );
// };
const RotatingSlider = ({ setBackgroundImage }) => {
  return (
    <div className="rotating-slider">
      <Carousel>
        {imgArr.map((img, i) => (
          <Card key={i} onClick={() => setBackgroundImage(img)} img={img} />
        ))}
      </Carousel>
    </div>
  );
};

export default RotatingSlider;
