import React from 'react'
import { Link } from "react-router-dom";
import { useTheme } from '../Context/ThemeContext';
const Navbar = () => {
    const {theme,toggleTheme} = useTheme()
    const togglemode = () => {
        toggleTheme()
    }
  return (
    <>
    <nav className='navbar'>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/career'>career</Link>
        </div>
        <div type= 'button' onClick={togglemode} style={{cursor : 'pointer'}}>
        
            {theme === 'light' ?'🌙' : '🌞' }
            
            </div>
    </nav>
    </>
  )
}

export default Navbar