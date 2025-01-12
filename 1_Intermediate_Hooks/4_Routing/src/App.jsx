import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {

  // Define routes

  const router= createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path:'/dasboard',
      element:<Dashboard></Dashboard>
    },
    {
      path: '/about',
      element:<About></About>
    }
  ])

  // render routes
  return (
    <>
      <div className="app-container">
        <div className="app1">
          <h1>All about Routing</h1>
          <p>npm i react-router-dom</p>
          <p>NavLink has isActive flag  by default</p>
        </div>

        <div className="app2">
        {/* <RouterProvider router={router} /> */}
          <Navbar></Navbar>
        </div>

        <div className="app3">
          Others
        </div>
      
      </div>
    </>
  )
}

export default App
