import React from 'react'

const Login = (props) => {
    function handleClick(){
        props.setState(false)
    }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
