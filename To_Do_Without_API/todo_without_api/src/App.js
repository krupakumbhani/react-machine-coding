import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usertable from "./Components/Usertable";
import data from './userdata.json'

import './Style.css';
import Userdetail from './Components/Userdetail';
import Useredit from './Components/Useredit';


function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Usertable data = {data} />} />
      <Route path='/userdetail/:uid' element={<Userdetail data = {data} />} />
      <Route path='/useredit/:uid' element={<Useredit data = {data} />} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
