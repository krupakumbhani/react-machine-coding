import React , {useState,useEffect} from 'react'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {login, setisLogin} = useAuth();
    const [username, setusername] = useState('kminchelle')
    const [password, setpassword] = useState('0lelplR')
   const navigate = useNavigate()

    const  handlesubmit = async () =>  {
      try {
        const res = await fetch('https://dummyjson.com/auth/login',
        {
         method : 'POST',
         headers: {
             'content-type' : 'application/json'
         },
         body:JSON.stringify({
             username,
             password
         })
        }
        )

        if(!res.ok){
            throw new Error ("HTTP Error")
        }

        const response = await res.json();
        login(response.token);

        if (response.token !== null) {
          setisLogin(true);
          navigate('/userdetail')

        }
      } catch (error) {
        setisLogin(false);
        console.error('An error occurred during login:', error);
      }
      
    }
    
   
    return (
        <>
            <h1>Login Form</h1>
            <div className='loginform'>
                <div>
                    <label htmlFor="username"> Username</label>
                    <input type="text" name="username" id="username" value={username} placeholder='username' onChange={(e) => setusername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} id="password" placeholder='password'
                    onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={handlesubmit} type="submit">Submit</button>
                </div>

            </div>
        </>
    )
}

export default Login