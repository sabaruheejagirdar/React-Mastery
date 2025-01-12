import React from 'react'
import './Card.css'
const Card = (props) => {

  function changeName(e) {
    props.setName(e.target.value);
  }
  
  return (
    <div className='card-container'>
       {/* <input type="text" onChange={(e)=>props.setName(e.target.value)} /> */}
       <input className="cardInput" type="text" onChange={changeName} />

       <p className='cardP'>Child {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
