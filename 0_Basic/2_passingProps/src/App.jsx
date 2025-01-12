import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  const buttonText= "Click here!!!"
  const [buttonCount, setbuttonCountFunc] = useState(10)

  function handleClick(){
    setbuttonCountFunc(buttonCount+1)
  }

  return (
    <>
    <div className="app-container">
      <div className="app-container">
          <div className="verbage">
            <p>PROPS PASSING- Variable, function</p>
          </div>

          <div className="card-outer-container">
            <Card name="Saba">
              <p>This area written in app but called from child component-Card</p>
              <p>Can be accessed using props.children or  { '{' } children { '}' }</p>
            </Card>
          </div>

          <div className="button-outer-container">
            <Button text={buttonText} handleClick={handleClick} >
            <h3>Count is: {buttonCount} </h3>
            </Button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
