import react,{ useCallback, useEffect, useState, useRef } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [includeSpecial, setIncludeSpecial] = useState(false)
  const inputelement = useRef(null)

 
  const GeneratePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeNumber) str += "1234567890"
    if(includeSpecial) str+= "!#`~%$^&*(){}[]:;?/><.,"
    console.log(str,includeNumber,includeSpecial)
    for (let i = 1; i < length; i++) {
      let charindx = Math.floor (Math.random() * str.length + 1)
      pass += str.charAt(charindx)
      
    } 
  
    setPassword(pass)
  },[
    length,includeNumber,includeSpecial
  ])

  useEffect(() => {
    GeneratePassword();
  }, [length, includeNumber, includeSpecial, GeneratePassword])
  
  function copypassword() {
    window.navigator.clipboard.writeText(password)
    inputelement.current.select()
  }

  return (
   <>
   <h1>Password Generator</h1>
   <label> Password </label>
   <input type="password" value={password} name='password' placeholder='password' readOnly={true} ref={inputelement} /> <span><button onClick={() => copypassword()}>Copy</button></span>
   <br />
   <label> Length </label>
   <input type="range" name="range" max={15} min={6} value={length} onChange={(e) => setLength(e.target.value)} />
   <span>{length}</span>
   <br />
   <label>Include Numbers</label>
   <input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)}/>
   
   <br />
   <label>Include Special Characters</label>
   <input type="checkbox" value={includeSpecial} onClick={() => setIncludeSpecial(!includeSpecial) }/>
   </>
  );
}

export default App;
