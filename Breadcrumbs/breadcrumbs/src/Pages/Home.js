import React from 'react'
import { Link } from "react-router-dom";
const Home = ({products}) => {
  return (
    <>
    <h2>Trending Products</h2>
    <div className="main">
    {
        products && products.slice(0,5).map((product,i) => {
            return(
                <div className="card" key={product.id}>
                    <img src={product.thumbnail} alt={product.title}/>
                    <h3>{product.title}</h3>
                </div>
            )
        })
    }
    </div>
    <Link to="/products">
    <button className='button'>More Products</button>
    </Link>
    </>
  )
}

export default Home