import React from "react";
// import One from './path-to-one.jpg';
// import Two from './path-to-two.jpg';
// import Three from './path-to-three.jpg';
// import Four from './path-to-four.jpg';
// import AltOne from './path-to-alt-one.jpg';
// import AltTwo from './path-to-alt-two.jpg';
// import AltThree from './path-to-alt-three.jpg';
// import AltFour from './path-to-alt-four.jpg';
import One from "../assets/media/1.png";
import Two from "../assets/media/2.png";
import Three from "../assets/media/3.png";
import Four from "../assets/media/4.png";
import HoverOne from "../assets/media/mukesh.png";
import HoverTwo from "../assets/media/X.png";
import HoverThree from "../assets/media/snigda.png";
const ImageGrid = () => {
  const images = [
    { src: One, hoverSrc: HoverOne },
    { src: Two, hoverSrc: HoverTwo },
    { src: Three, hoverSrc: HoverThree },
    // { src: Four, hoverSrc: null },
  ];

  return (
    <div className="max-8xl flex-1 grid grid-cols-2 gap-x-6  ">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex h-64 w-64 rounded-md overflow-hidden group"
        >
          {/* Default image */}
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="absolute object-cover transition-transform duration-500 group-hover:translate-x-full"
          />
          {/* Hover image */}
          <img
            src={image.hoverSrc}
            alt={`Hover Image ${index + 1}`}
            className="absolute w-full h-full object-cover transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0"
          />
        </div>
      ))}
      {/* Fourth image */}
      <div className="relative flex h-64 w-64 rounded-md overflow-hidden">
        <img
          src={Four}
          alt="Static Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
