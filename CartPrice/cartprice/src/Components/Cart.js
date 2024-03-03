import React,{useState, useEffect} from 'react'

const Cart = ({ cartitems }) => {
const [cart, setcart] = useState(cartitems)
function incrqnty(id) {
    const update = cart.map((each,i) => {
        if (each.id === id) {
            return {...each, quantity:each.quantity+1}
        }
        return each
    }
      )
      setcart(update)
}
function dcrqnty(id) {
    const update = cart.map((each) => {
        if (each.id === id) {
            return {...each, quantity:each.quantity > 1 ? each.quantity-1 : 1}
        }
        return each
    }
      )
      setcart(update)
}
useEffect(() => {
 setcart(cartitems)
}, [cartitems])

console.log(cart,"kkkk")
console.log(cartitems,"ppp")
    return (
        <>
            <h1 className='text-center'>
                Cart Items
            </h1>
            

            {
               cart.map((item,indx) => {
                return (
                    <div key={indx} className='border w-100 d-flex flex-row my-2 p-1 align-items-center justify-content-between'>
                        <div className='d-flex flex-row align-items-center'>
                        <img src={item.thumbnail} alt={item.title} style={{height:'50px', width:'50px'}} />
                        <p className='mx-2'>Rs. {item.price}</p>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <button className='mx-2 px-1' onClick={() => dcrqnty(item.id)}>-</button>
                            <p className='m-0'>{item.quantity}</p>
                            <button className='mx-2 px-1' onClick={() => incrqnty(item.id)}>+</button>
                        </div>
                    </div>
                )
              })
            }
<h4 className='text-center'>
                Total Amount : {cart.reduce((acc,item) => acc + (item.price * item.quantity) ,0 )} Rs.
            </h4>
        </>
    )
}

export default Cart