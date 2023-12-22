import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const Useredit = ({data}) => {
    let { uid } = useParams()
    let detail = data.filter(ele => ele.id === uid)
    const [Version, SetVersion] = useState(detail[0].version)
    const [bio, setBio] = useState(detail[0].bio)
    const [Language, setLanguage] = useState(detail[0].language)
    const [Name, setName] = useState(detail[0].name)
    let navigation = useNavigate()
    const handleSubmit = (e) => {
            e.preventDefault();
            detail[0].version = Version;
            detail[0].bio =   bio;
            detail[0].language =  Language;
            detail[0].name = Name;
            navigation('/')
    }
   
    return (
       
        <>
            <h1>Edit User Data</h1>
            <h3>Id : ({uid})</h3>
            <table className='m-5'>
                <thead className='border'>
                    <th>Id</th>
                    <th>Bio</th>
                    <th>Language</th>
                    <th>Name</th>
                    <th>Version</th>
                    <th>Action</th>

                </thead>
                <tr>
                    <td className='border py-3 px-1'>{detail[0].id}</td>
                    <td className='border py-3 px-1'><textarea type="text" name='bio' value = {bio} onChange={(e) => setBio(e.target.value)}/></td>
                    <td className='border py-3 px-1'><input type="text" name='Language' value = {Language} onChange={(e) => setLanguage(e.target.value)}/></td>
                    <td className='border py-3 px-1'><input type="text" name='Name' value = {Name} onChange={(e) => setName(e.target.value)}/></td>
                    <td className='border py-3 px-1'><input type="text" name='Version' value = {Version} onChange={(e) => SetVersion(e.target.value)}/></td>
                    <td className='border py-3 px-1'><button type='submit' className='btn btn-primary mx-3' onClick={(e)=> handleSubmit(e)}>Submit</button></td>

                </tr>


            </table>
        </>
    )
}

export default Useredit