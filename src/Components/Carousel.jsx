import React, { useState } from "react";
import "./Carousel.css";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import "./Home.css";
const Carousel = ({ images, name }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const nextSlide = () => {
    // stay on same slide for 3 second
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  // make slide go to next after 1 seconds
  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 3000);
  const colorChange = () => {
    // give random hex color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  console.log(name);
  return (
    <section className="slider">
      <div className="carousel">
        <div className="carousel-container">
          {images.map((image, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={image}
                    alt="pokemon"
                    className="image"
                    style={{
                      webkitFilter: `drop-shadow(0px 0px 0px ${colorChange()})`,
                      filter: `drop-shadow(10px 20px 40px ${colorChange()})`,
                    }}
                  ></img>
                )}
              </div>
            );
          })}
          <div className="name">
            <h1 
              style={{
                webkitTextStroke: `1px ${colorChange()}`,
                textStroke: `1px ${colorChange()}`,
              }}
            >
              {name[current]}
            </h1>
          </div>
          <button className="prev" onClick={prevSlide}>
              {"<"}
          </button>
          <button className="next" onClick={nextSlide}>
            <ChevronRightOutlinedIcon  className="next-btn"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
