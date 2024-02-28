import React, { useState } from 'react';
import pokeball from '../assets/pokeball.png'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
// give cmd 
import './Home.css'
const Carousel = ({ images ,name}) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const nextSlide = () => {
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
  return (
    <section className="slider">
      <div className="carousel">
        <div className="carousel-container">
          {images.map((image, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={image} alt="pokemon" className="image" />
                )}
              </div>
            );
          })}
          <button className="prev" onClick={prevSlide}>
            prev
          </button>
          <button className="next" onClick={nextSlide}>
            next
          </button>
        </div>
        <div className="pokemon-name">
          <h1>{name[current]}</h1>
        </div>
      </div>
    </section>
  );

};

export default Carousel;
