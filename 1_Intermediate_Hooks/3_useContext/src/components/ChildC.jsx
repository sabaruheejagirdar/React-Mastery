import React, {useContext} from 'react'
import { ThemeContext } from '../App'
// import { NameContext } from '../App'

const ChildC = () => {
    // const user = useContext(NameContext)
    const {theme, setThemeFunc} = useContext(ThemeContext)

    function toggleClick(){
        if(theme === 'light'){
            setThemeFunc('dark')
        }else{
            setThemeFunc('light')
        }
    }
  return (
    <>
      {/* {/* <p>{user.name} {user.lastname}</p>  */}
      <button onClick={toggleClick}>Change Theme</button> 
    </>
  )
}

export default ChildC
