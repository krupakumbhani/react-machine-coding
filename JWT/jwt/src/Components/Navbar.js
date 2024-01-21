import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
  const {logout,isLogin} = useAuth()
 
  console.log("islogin", isLogin)
  return (
    <>
     <nav className='navbar'>
        <ul className='nav-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/userdetail'>User Profile</Link></li>
            {
              localStorage.getItem('token') ? 
              <li><Link to="/" onClick={logout}>logout</Link></li>  
              : <li><Link to="/login">login</Link></li>
            }           
        </ul>
    </nav>
    </>
  )
}

export default Navbar