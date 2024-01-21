import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import UserDetail from './Pages/UserDetail';
import User from './Pages/User';
import { AuthProvider,useAuth } from "./Context/AuthContext";
import ProtectedRoutes from './Components/ProtectedRoutes';
function App() {
  
  return (
    <AuthProvider>
      <Navbar />
    
      <Routes> 
        <Route element={<ProtectedRoutes />}>
          <Route path='/userdetail' element={<UserDetail/>}></Route>
        </Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/login' element={<Login/>}></Route>
       
      </Routes>
     

    </AuthProvider>
  );
}

export default App;
