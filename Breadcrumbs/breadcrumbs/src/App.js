import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Breadcrums from './Components/Breadcrums';
function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products').then((res) => res.json()).then((res) => setProducts(res.products))
  }, [])
  return (
    <BrowserRouter>
    <h1>BreadCrumbs</h1>
    <Breadcrums />
    <Routes>
      <Route path='/' element = {<Home  products= {products}/>}></Route>
      <Route path='/products' element = {<ProductList products= {products}/>}></Route>
      <Route path='/products/:id' element = {<ProductDetail />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
