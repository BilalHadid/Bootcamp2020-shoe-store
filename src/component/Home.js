import React from "react";
import { Zoom } from "react-slideshow-image";
import "../App.css";
import "react-slideshow-image/dist/styles.css";
import img1 from "./images/bilal.jpg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/backImg.jpg";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};
const images = [img1, img2, img3, img4, img5];
export const Home = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "85vh" }}
            src={each}
            alt={index}
          />
        ))}
      </Zoom>
    </div>
  );
};
