import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

const Userdetail = ({data}) => {
    let { uid } = useParams()
    let detail = data.filter(ele => ele.id === uid)
    let navigation = useNavigate()
    
    return (
        <>
            <h1>User Details</h1>
            <h3>Id : ({uid})</h3>
            <table className='m-5'>
                <thead className='border'>
                    <th>Id</th>
                    <th>Bio</th>
                    <th>Language</th>
                    <th>Name</th>
                    <th>Version</th>

                </thead>


                <tr>
                    <td className='border py-3 px-1'>{detail[0].id}</td>
                    <td className='border py-3 px-1'>{detail[0].bio}</td>
                    <td className='border py-3 px-1'>{detail[0].language}</td>
                    <td className='border py-3 px-1'>{detail[0].name}</td>
                    <td className='border py-3 px-1'>{detail[0].version}</td>

                </tr>


            </table>
            <button className='btn btn-primary' onClick={() => navigation('/')}>Back</button>
        </>
    )
}

export default Userdetail