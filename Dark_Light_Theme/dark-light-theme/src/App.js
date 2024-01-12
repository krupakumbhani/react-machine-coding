import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Context/ThemeContext';
function App() {
  return (
    <ThemeProvider>
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/career' element={<Career />}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
