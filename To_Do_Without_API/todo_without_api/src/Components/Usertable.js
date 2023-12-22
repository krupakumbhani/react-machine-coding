import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
const Usertable = ({data}) => {
    const [filtereddata, setfiltereddata] = useState(data)
    const navigate = useNavigate();
    let loadDetails = (id) => {
        navigate("/userdetail/" + id)
    }
    let loadEdit = (id) => {
        navigate("/useredit/" + id)
    }
    let loadDelete = (id) => {
        
        const abc = filtereddata.filter(ele => ele.id !== id);
        setfiltereddata(abc)


    }
  return (
    <>
        <h1>TODO WITHOUT API</h1>
        <table className='m-5'>
            <thead className='border'>
                <th>Id</th>
                <th>Bio</th>
                <th>Language</th>
                <th>Name</th>
                <th>Version</th>
                <th>Action</th>
            </thead>
            {
                filtereddata && filtereddata.map((item, i) => (
                    <tr key={i} >
                        <td className='border py-3 px-1'>{item.id}</td>
                        <td className='border py-3 px-1'>{item.bio}</td>
                        <td className='border py-3 px-1'>{item.language}</td>
                        <td className='border py-3 px-1'>{item.name}</td>
                        <td className='border py-3 px-1'>{item.version}</td>
                        <td className='border py-3 px-1'>
                            <button type='button' className='btn btn-warning m-1' onClick={() => loadDetails(item.id)}>Detail</button>
                            <button type='button' className='btn btn-success m-1' onClick={() => loadEdit(item.id)}>Edit</button>
                            <button type='button' className='btn btn-danger m-1' onClick={() => loadDelete(item.id)}>Delete</button>
                            
                        </td>
                    </tr>
                ))
            }
        </table>
    </>
  )
}

export default Usertable