import './App.css'
import UserCard from './components/UserCard.jsx'
import Shinchan from './assets/shinchan.png'
import Noddy from './assets/noddy.jpg'
import Oswald from './assets/oswald.png'

function App() {

  return (
    <>
      <p className='headline'>React Basics by Saba Ruhee</p>
      <p>1. Components</p>
      <p>2. Props</p>
      <p>3. JSX</p>
      <div className='main-container'>
        <UserCard name="Noddy" pic={Noddy} desc="Noddy is cheerful and kind-hearted" style={{"border-radius":"10px"}}/>
        <UserCard name="Oswald" pic={Oswald} desc="Oswald is gentle and friendly blue octopus" style={{"border-radius":"10px"}}/>
        <UserCard name="Shinchan" pic={Shinchan} desc="Shinchan is witty and mischievous kid" style={{"border-radius":"10px"}}/>

      </div>
      
    </>
  )
}

export default App
