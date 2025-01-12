import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },

    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element: <Courses/>
        },
        {
          path:'mock-tests',
          element: <MockTest/>
        },
        {
          path:'reports',
          element: <Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp />
      </div>

    },
    {
      path:'*',
      element:<NotFound />
    }
  ]
);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <h3>Features</h3>
      <div style={{padding:"10px"}}>
        <li>createBrowserRouter</li>
        <li>RouterProvider</li>
        <li>useNavigate</li>
        <li>useParams</li>
        <li>Nested Routing- Outlet</li>
        <li>Link</li>
      </div>

    </div>
  )
}

export default App
