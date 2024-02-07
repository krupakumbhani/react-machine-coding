import './App.css';
import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductTable from './Pages/ProductTable';
import ProdDetail from './Pages/ProdDetail';
import ProdCart from './Pages/ProdCart';
function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  function addtocart(product) {
    alert("product added to cart")
    setCartItems([...cartItems,product])
  }
  useEffect(() => {
  fetch('https://dummyjson.com/products').then((res) => res.json()).then((data) => setProducts(data))
  }, [])
  console.log(products)
    return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ProductTable prods = {products}/>}></Route>
    <Route path='/proddetail/:id' element={<ProdDetail onaddtocart = {addtocart} />}></Route>
    <Route path='/productcart' element={<ProdCart cartItems={cartItems}/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
