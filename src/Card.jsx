import React from 'react'
import './Card.css'
const Card = ({name,img,height,weight}) => {
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
    </div>
    </>
  )
}

export default Card