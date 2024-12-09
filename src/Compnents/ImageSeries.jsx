import React, { useState, useEffect } from "react";
import one from "../assets/media/one.png";
import two from "../assets/media/six.png";
import four from "../assets/media/four.png";
import three from "../assets/media/three.png";
import five from "../assets/media/five.png";
import six from "../assets/media/two.png";
const ImageSeries = () => {
  const images = [one, two, three, four, five, six];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 500ms
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[580px] rounded-[33px] object-cover">
      <div className="relative w-full h-[580px] rounded-[33px] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSeries;
