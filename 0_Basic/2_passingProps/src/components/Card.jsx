import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      Carddd {props.name} {props.children}
      {/* Carddd {name} {children} */}
    </div>
  )
}

export default Card
