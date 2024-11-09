import React from 'react'
import './Country.css'
const Country = ({item,index}) => {
  return (
    <div className="countryContainer" key={index}>
        <div className='countryImage'>
            <img src={item.flag} alt={`Flag of ${item.name}`} />
        </div>
        <h1 className='countryName'>{item.name}</h1>
    </div>
  )
}

export default Country