import React, { useState } from "react";
import "./index.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button onClick={goToPrevSlide}>&lt;</button>
      {images[currentIndex]}
      <button onClick={goToNextSlide}>&gt;</button>
    </div>
  );
};

export default Slider;
