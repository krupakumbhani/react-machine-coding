import  Progressbar  from "./Components/Progressbar";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [percent, setPercent] = useState(0)
  useEffect(()=>{
    setInterval(() => {
      setPercent((val) => val + 1)
    }, 500);
  },[])
  
  
  return (
    <>
      <h1>Progress Bar</h1>
      <Progressbar value={percent}/>
    </>
  );
}

export default App;
