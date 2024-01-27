import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import pokeball from '../assets/pokeball.png'
const Home = () => {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => {
          setArr((arr) => [...arr, res.data]);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="main-container">
      <div className="heading-container">
        <span className="heading">POKECHU</span>
        <img className="pokeball" src={pokeball} alt="pokeball"  />
      </div>
        <Carousel className="carousel"
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        fade={true}
        showArrows={true}
        interval={3000}
        > 
          {
            arr.map((item, i) => {
              return (
                  <div className="car-ctn">
                  <h1 className="car-name">{item.name}</h1>
                  <img className="car-image" src={item.sprites.other.dream_world.front_default} />
                  </div>
                  
              );
            })
          }
        </Carousel>
        <div className="search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleChange}>
            Search
          </button>
          {pokemon.name && (
            <Card
              name={pokemon.name}
              img={pokemon.sprites.other.dream_world.front_default}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          )}
        </div>
        <div className="card-container">
          {arr.map((item, i) => {
            return (
              <Card
                key={i}
                name={item.name}
                img={item.sprites.other.dream_world.front_default}
                height={item.height}
                weight={item.weight}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
