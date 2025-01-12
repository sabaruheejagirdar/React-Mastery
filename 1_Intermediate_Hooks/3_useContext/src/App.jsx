import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// const NameContext = createContext()
const ThemeContext = createContext()

function App() {
  const [usernameParent, setNameFunc] = useState({name:"Saba Ruhee", lastname:"Jagirdar"})
  const [theme, setThemeFunc] = useState('light')

  return (
    <>
      <div className="app-container">
        <div className="app1">
          <h1>useContext</h1>
          <p>Parent ---{'>'} Child1 ---{'>'} Child2 ---{'>'} Child3 </p>
          <p>On way to pass data between Components is using Props</p>
          <p>To pass data from Parent component to Child3 Components, the data needs to be passed via Parent to Child1 to Child2 to Child3. This is called as prop drilling</p>
          <p>To avoid to overuse of drilling we useContext.</p>
          <p>useContext has- <br/>1. createContext 2. Provider 3. Consumer</p>

          <h2>Process</h2>
          <p><b>Step1:</b>create Context</p>
          <p><b>Step2:</b>Wrap all the child inside the provider</p>
          <p><b>Step3:</b>Pass value and dont forget to export the created context</p>
          <p><b>Step4:</b>Utilize within consumer</p>

        </div>

        {/* <div className="app2 childA-outer-container">
          <NameContext.Provider value={usernameParent}> 
            <ChildA />
          </NameContext.Provider>
        </div> */}

        <div className="app3">
        <ThemeContext.Provider value={{theme,setThemeFunc}}>
            <div style={{"background":theme === 'light' ? 'green' : 'orange'}} className='setwidth'>
              <ChildA />
            </div>
          </ThemeContext.Provider>
        </div>
      
      </div>
    </>
  )
}

export default App;
// export {NameContext}
export {ThemeContext}
