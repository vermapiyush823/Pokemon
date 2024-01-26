import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './PokeShow.css'

const PokeShow = () => {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            setPokemon(res.data)
        })
        .catch((err) => console.log(err))
        }
        , []);
        const {name} = useParams()

    return (
        <>
        <div className='container'>
            <h1>
                {pokemon.name}
            </h1>
            <img src={pokemon.sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
            <h3>
                Height: {pokemon.height}
            </h3>
            <h3>
                Weight: {pokemon.weight} kg
            </h3>   
        </div>
        </>
    )
}
export default PokeShow