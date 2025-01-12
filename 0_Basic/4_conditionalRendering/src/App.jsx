import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [isLoggedIn, setIsLoggedInFunc] = useState(true);
  function renderLoginLogout(isLoggedIn) {
    // ------------if-else
    // if (isLoggedIn) {
    //   return <Login setState={setIsLoggedInFunc}/>;
    // } else {
    //   return <Logout setState={setIsLoggedInFunc}/>;
    // }

    // -------Using TERNARY Operator
    // return isLoggedIn ? (<Login setState={setIsLoggedInFunc}/>) : (<Logout setState={setIsLoggedInFunc}/>)

    // -------Using Logical Operator
    return (
      <>
        {isLoggedIn && <Login setState={setIsLoggedInFunc} />}
        {!isLoggedIn && <Logout setState={setIsLoggedInFunc} />}
      </>
    );


  }
  

  return (
    <>
      <div className="app-container">
        <div className="app1">
          <h1>Conditional Rendering</h1>
          <ol>
            <li>if-else</li>
            <li>ternary</li>
            <li>Logical operator</li>
            <li>Early return</li>
          </ol>
        </div>

        <div className="app2">
          <div className="loginLogout-outer-container">
            {renderLoginLogout(isLoggedIn)}
          </div>
          
        </div>

        {/* <div className="app3">
          Others
        </div> */}
      
      </div>
    </>
  )
}

export default App
