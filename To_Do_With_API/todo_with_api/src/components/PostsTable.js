import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
const PostsTable = ({ posts }) => {
    let data = posts.posts;
    let navigation = useNavigate()
    function addPost() {
        navigation("/addpost")
    }
    function showdetail(ele) {
        navigation("/postdetail/" + ele.id)
    }
    function editpost(ele) {
        navigation("/editpost/" + ele.id)
    }
    function deletepost(ele) {
        fetch('https://dummyjson.com/posts/'+ele.id, {
            method:'DELETE'
        }).then(resp  => window.location.reload)
    }
    return (
        <>
            <h1 className='text-center my-3'> Posts Table</h1>
            <button className='btn btn-success m-3'onClick={() => addPost()}>Create Post</button>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>userId</th>
                        <th>tags</th>
                        <th>reactions</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.userId}</td>
                                <td>{ele.tags}</td>
                                <td>{ele.reactions}</td>
                                <td>
                                    <button className='btn btn-secondary mx-1' onClick={() => showdetail(ele)}>Detail</button>
                                    <button className='btn btn-info mx-1' onClick={()=>editpost(ele)}>Edit</button>
                                    <button className='btn btn-danger mx-1' onClick={()=>deletepost(ele)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
        </>
    )
}

export default PostsTable