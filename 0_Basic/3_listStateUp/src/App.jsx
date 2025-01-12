import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  // Create state, manage state, change state, sync state with all  children
  const [name, setName] = useState('')
  return (
    <>
      <div className="app-container">
        <div className="app1">
          <h1>State Lifting</h1>
          <p>This is done by passing function to child and then updating that maintaining the function at PARENT</p>
          <p>So that same state can be shared in between child</p>
          <p>Use case: Multiple panel, but show description of only the clicked panel</p>
          {/* <p>Displaying in parent: {name}</p> */}
        </div>

        <div className="app2 card-outer-container">
          <Card title="Card1" name={name} setName={setName}></Card>
          <Card title="Card2" name={name} setName={setName}></Card>
        </div>

        <div className="app3">
          Displaying in parent: {name}
        </div>
      
      </div>
    </>
  )
}

export default App
