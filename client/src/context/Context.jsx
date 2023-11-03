import React, { createContext, useContext, useState } from "react";
import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import kitchen3 from "../assets/kitchen3.jpg";
import kitchen4 from "../assets/kitchen4.jpg";
import kitchen5 from "../assets/kitchen5.jpg";
import kitchen6 from "../assets/kitchen6.jpg";
import kitchen7 from "../assets/kitchen7.jpg";
import kitchen8 from "../assets/kitchen8.jpg";

const imgArr = [
  kitchen1,
  kitchen2,
  kitchen3,
  kitchen4,
  kitchen5,
  kitchen6,
  kitchen7,
  kitchen8,
];
const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [activeImage, setActiveImage] = useState(imgArr[1]);

  return (
    <CarouselContext.Provider value={{ imgArr, activeImage, setActiveImage }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};
