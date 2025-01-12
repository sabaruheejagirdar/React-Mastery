import './App.css'
import Counter from './components/Counter.jsx'

function App() {

  return (
    <>
    <div className='appContainer'>
      <p className='headerLine'>React- useState</p>
      <div className='description'>
        <ol>  
        <li> <b>What</b> <br></br>useState is a React Hook that allows you to add state management to functional components. It enables you to track and update values (state) dynamically within a functional component without needing to convert it into a class component.</li>
        <li>
          <b>Why</b>
          <p>State Management in Functional Components:</p>
          <p>Dynamic Updates:Allows components to respond to user interactions, API data updates, or other changes by updating their state. </p>
        </li>
        <li>
          <b>Syntax</b>
          <p>const [state, setState] = useState(initialValue);</p>
        </li>
        <li>
          <b>Use cases:</b>
          <p>Form Input Handling</p>
          <p>Toggle Features</p>
          <p>Control conditional rendering based on state values</p>
          <p>Manage and display API data within components.</p>
        </li>
        </ol>
      </div>
      <div className='counter-outer-container'>
        <Counter/>
      </div>
    </div>
    </>
  )
}

export default App
