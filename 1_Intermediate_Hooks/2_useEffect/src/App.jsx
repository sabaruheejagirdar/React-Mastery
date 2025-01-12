import { useEffect, useState } from 'react';
import Datafetcher from './components/DataFetcher.jsx';
import LoggerComponent from './components/LoggerComponent.jsx';
import MultiEffectComponent from './components/MultiEffectComponent.jsx';
import ResizeComponent from './components/ResizeComponent.jsx';
import TimerComponent from './components/TimerComponent.jsx';
import './App.css';

function App() {
  console.log("Component rendered");

  const [count, setCount] = useState(0);

  /*-------USEEFFECT
      first -> Side effect function
      second -> Cleanup function
      third -> Comma separated list

      useEffect(() => {
        first

        return () => {
          second
        }
      }, [dependencies])
  */

  //---------Variation 1 - Runs on every render-------// 
  // useEffect(() => {
  //   console.log("-Runs on every render");
  // });

  //---------Variation 2 - Runs on only first render-------// 
    // useEffect(() => {
    //   console.log("-Runs on first render only");
    // }, []);

    //---------Variation 3 - Runs only when `count` changes-------// 
  // 
    // useEffect(() => {
    //   console.log(`-Count updated to: ${count}`);
    // }, [count]);

   //---------Variation 4 - Multiple depencies-------// 
  //  useEffect(() => {
  //   console.log("-Runs on every time when either of the dependency element changes");
  // }, [count, total]);

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
      <div className="app-container">
        <div className="app1">
          <h1>useEffect</h1>
          <p>useEffect is a React Hook that allows you to perform side effects in functional components.</p>
          <h3>Uses</h3>
          <p>Fetching data from APIs.</p>
          <p>Subscribing or unsubscribing to events.</p>
          <p>Updating the DOM (e.g., setting the document title).</p>
          <p>Managing timers or intervals.</p>
        </div>

        <div className="app2">
          <button onClick={handleClick}>Click to Increment</button>
          <p>Current Count: {count}</p>
        </div>

        <div className="app3">
          Check these Components
          {/* <LoggerComponent></LoggerComponent> */}
          {/* <MultiEffectComponent></MultiEffectComponent> */}
          {/* <ResizeComponent></ResizeComponent> */}
          {/* <TimerComponent></TimerComponent> */}
          {/* <Datafetcher></Datafetcher>  */}
        </div>
      </div>
    </>
  );
}

export default App;
