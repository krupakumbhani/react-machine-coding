import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
const ProdCart = ({ cartItems }) => {
    let navigate = useNavigate()
  return (
    <div className='cartbox'>
        <h1>Product Cart</h1>
        <ul >
            {
                cartItems.map((item) => (
                    <li key={item.id}>{item.title} in {item.price}Rs.</li>
                ))
            }
        </ul>
        <button onClick={() => navigate('/')}>back</button>
    </div>
  )
}

export default ProdCart