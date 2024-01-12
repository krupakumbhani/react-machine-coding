import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const prod = useParams()
    
    const [detail, setDetail] = useState({})
    useEffect(() => {
     fetch(`https://dummyjson.com/products/${prod.id}`).then((res) => res.json()).then((res) => setDetail(res))
    }, [prod.id])
    
  return (
    <>
    <h2>{detail.title}</h2>
    <img src={detail.thumbnail} alt={detail.title} />
    </>
  )
}

export default ProductDetail