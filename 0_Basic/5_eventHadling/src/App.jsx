import './App.css'

function App() {

  function handleClick(){
    alert("Click")
  }

  function handleSubmit(){
    alert("Form Submit")
  }

  function handleInputChange(e){
    console.log("Value till now", e.target.value)
  }


  return (
    <>
      <div className="app-container">
        <div className="app1">
          <h1>Event Handling</h1>
          {/* <pre>
            Dont directly write the action on hadle, always make sure to call it via function else an immediate invocation happens
            <button onClick={alert("Hi")}></button>
            instead <button onClick={()=>alert("Hi")}></button>
          </pre> */}
        </div>

        <div className="app2">
          <button onClick={handleClick} className='appButton'>Click</button>
        </div>

        <div className="app3">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} className="inputText" />
          <button onClick={handleSubmit} className='appButton'>Submit</button>
        </form>
        </div>
      
      </div>
    </>
  )
}

export default App
