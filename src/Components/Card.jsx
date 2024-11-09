import React from 'react'
import './Card.css'
const Card = ({item,index}) => {
  return (
    <div className="cardContainer" key={index}>
        <div className='cardImage'>
            <img src={item.flag} alt={item.abbr} />
        </div>
        <h1 className='countryName'>{item.name}</h1>
    </div>
  )
}

export default Card