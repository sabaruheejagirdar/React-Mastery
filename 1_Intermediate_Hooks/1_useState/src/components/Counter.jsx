import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCountFunc]= useState(8)
  return (
    <div className='counter-container'>
      <p>You've clicked {count} times </p>
      <button onClick={()=>setCountFunc(count+1)}>Click!!</button>
    </div>
  )
}

export default Counter
