import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className='button-container'>
      <div>{props.children}</div>
        <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default Button
