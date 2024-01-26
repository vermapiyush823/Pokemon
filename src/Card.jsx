import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({name,img,height,weight,key}) => {
  return (
    <>
    <div className='card'>
        <h1>
            {name}
        </h1>
        <img src={img} alt={name} />
        <h3>
            Height: {height}
        </h3>
        <h3>
            Weight: {weight} kg
        </h3>
        <Link to={`/${name}`}>
          <button>View</button>
        </Link>
    </div>
    </>
  )
}

export default Card