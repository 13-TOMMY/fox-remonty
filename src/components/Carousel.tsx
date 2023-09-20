import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

interface CarouselProps {
  images: string[];
}
function Carousel({ images }: CarouselProps) {
  const { darkMode } = useContext(ThemeContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <motion.img
        style={{}}
        src={images[currentImageIndex]}
        alt="Carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div
        className={
          darkMode
            ? "dark-container btns-carousel-container"
            : " light-container btns-carousel-container"
        }
      >
        <button onClick={prevImage}>
          <BsFillArrowLeftCircleFill className="left-arrow-carousel-container m-font" />
        </button>
        <div className="indicators-carousel-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextImage}>
          <BsFillArrowRightCircleFill className="right-arrow-carousel-container m-font" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
