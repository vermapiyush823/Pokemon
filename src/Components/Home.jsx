import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";
import "./Home.css";
import pokeball from "../assets/pokeball.png";
const Home = () => {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => {
          setArr((arr) => [...arr, res.data]);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <>
      <div className="logo">
        <img src={pokeball} className="pokeball"/>
        <span>POKECHU</span>
      </div>
      <div className="main-container">
        <div className="carsousel-container">
          <Carousel
            images={arr.map((pokemon) => pokemon.sprites.front_default)}
            name={arr.map((pokemon) => pokemon.name)}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
