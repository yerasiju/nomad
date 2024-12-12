import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle Next button
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle Previous button
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={goToPrev} className="carousel-btn prev">
        Previous
      </button>
      <button onClick={goToNext} className="carousel-btn next">
        Next
      </button>
    </div>
  );
};

export default Carousel;
