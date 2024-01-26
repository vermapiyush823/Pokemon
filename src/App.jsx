import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    for (let i = 1; i <= 101; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => {
          setArr((arr) => [...arr, res.data]);
        })
        .catch((err) => console.log(err));
    }
  }
    , []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="card-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={handleChange}
          />
          <button type='submit' onClick={handleChange}>Search</button>
          {
          pokemon.name && <Card
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default}
            height={pokemon.height}
            weight={pokemon.weight}
            ability={pokemon.abilities[0].ability.name}

          />
        }
        </div>


        {arr.map((item, i) => {
          return (
            <Card
              key={i}
              name={item.name}
              img={item.sprites.other.dream_world.front_default}
              height={item.height}
              weight={item.weight}
              ability={item.abilities[0].ability.name}

            />
          );
        })}

      </div>
    </>
  );
}

export default App;
