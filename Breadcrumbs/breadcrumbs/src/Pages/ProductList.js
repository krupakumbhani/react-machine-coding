import React from 'react'
import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
    return (
        <>
            <h2>Trending Products</h2>
            <div className="main">
                {
                    products && products.map((product, i) => {
                        return (
                            <Link to= {`/products/${product.id}`}>
                                <div className="card" key={product.id}>
                                    <img src={product.thumbnail} alt={product.title} />
                                    <h3>{product.title}</h3>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>

        </>
    )
}

export default ProductList