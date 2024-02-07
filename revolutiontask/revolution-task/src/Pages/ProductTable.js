import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
const ProductTable = ({prods}) => {
    let data = prods.products
    let navigate = useNavigate()
function showdetail(ele) {
    
    navigate("/proddetail/" + ele.id)
}
console.log(data)
  return (
    <>
    <table >
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {
                data && data.map((ele) => (
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.price}</td>
                        <td>
                            <button onClick={() => showdetail(ele)}>Show Detail</button>
                        </td>

                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default ProductTable