import React from 'react'

const Logout = (props) => {
    function handleClick(){
        props.setState(true)
    }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
