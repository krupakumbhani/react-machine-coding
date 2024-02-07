import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
const ProdDetail = ({ onaddtocart }) => {
    let navigate = useNavigate()
    let param = useParams()
    const [prod, setProd] = useState()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param.id}`).then((res) => res.json()).then((resp) => setProd(resp))
    }, [param.id])

    return (
        <>
            <h1>Product Detail of : {prod?.id}</h1>
            <div className='detail-container'>
                <h2>{prod?.title}</h2>
                <p> {prod?.description}</p>
                <p>Price : {prod?.price}</p>
                <button onClick={() => onaddtocart(prod)}>Add to Cart</button>
                <button onClick={() => navigate('/productcart')}>View Cart</button>
                <button onClick={() => navigate('/')}>back</button>
            </div>

        </>
    )
}

export default ProdDetail