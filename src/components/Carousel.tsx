import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface CarouselProps {
  images: string[];
}
function Carousel({ images }: CarouselProps) {
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
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <motion.img
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={images[currentImageIndex]}
        alt="Carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="btns-carousel-container">
        <button onClick={prevImage}>
          <BsFillArrowLeftCircleFill className="left-arrow-carousel-container" />
        </button>
        <div className="indicators-carousel-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
        </div>
        <button onClick={nextImage}>
          <BsFillArrowRightCircleFill className="right-arrow-carousel-container" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
