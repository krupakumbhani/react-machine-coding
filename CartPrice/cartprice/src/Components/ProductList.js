import React, { useState, useEffect } from 'react'

const ProductList = ({updatecart}) => {
    const [products, setproducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => res.json()).then((res) => setproducts(res.products))
    }, [])

    function addtocart(item) {
        const itemWithQuantity = { ...item, quantity: 1 };
        setCartItems([...cartItems, itemWithQuantity])
        updatecart([...cartItems, itemWithQuantity])
    }
    function removefromcart(id) {
        setCartItems(cartItems.filter((item) => item.id !== id))
        updatecart(cartItems.filter((item) => item.id !== id))
    }
    



    return (
        <>
            <h1 className='text-center'>Product List</h1>
            <div className="row justify-content-evenly">
                {
                    products.map((prod, indx) => {
                        return (
                            <div key={indx} className='mx-3 my-3 border p-3 col-3 bg-light'>
                                <img className='w-100' src={prod.thumbnail} alt={prod.brand} />
                                <p>{prod.title}</p>
                                <p>Rs. {prod.price}</p>
                                {
                                    cartItems.find((ele) => ele.id === prod.id) ?
                                        <button className='btn btn-danger mx-3' onClick={() => removefromcart(prod.id)}>Remove from Cart</button> :
                                        <button className='btn btn-success' onClick={() => addtocart(prod)}>Add to Cart</button>

                                }


                            </div>
                        )
                    })
                }
            </div>



        </>
    )
}

export default ProductList