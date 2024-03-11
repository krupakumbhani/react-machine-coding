import './App.css';
import { useState } from "react";
import data from "./Utils/Infinite.json";
import Infinitebox from './Components/Infinitebox';

function App() {
  const [comments, setComments] = useState(data);
  
  return (
    <>
    <h1>Infinite Comment Section</h1>
    <Infinitebox key={comments.id} data = {comments}/>
    
    </>
  );
}

export default App;
