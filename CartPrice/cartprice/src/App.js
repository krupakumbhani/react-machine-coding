import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { useState } from 'react';
function App() {
  const [cart, setcart] = useState([])
  function updatecart(items) {
    setcart(items)
  }
  console.log('cart' , cart)
  return (
    <>
        <div className="row">
          <div className="col-9 border  ">
            <ProductList updatecart = {updatecart} />
          </div>
          <div className="col-3 border  bg-light">
            <Cart cartitems={cart}/>
          </div>
        </div>
    </>
  );
}

export default App;
