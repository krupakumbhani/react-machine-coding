import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PostDetail = () => {
    let navigation = useNavigate()
    let param = useParams()
    const [post, setpost] = useState()
    useEffect(() => {
      fetch(`https://dummyjson.com/posts/${param.id}`).then(res => res.json()).then(resp => setpost(resp))
    }, [ param.id ])
   
  
  return (
    <>
    <div className='w-50 m-auto'>
    <h1>PostDetail of ID : {post?.id}</h1>
    <h2>{post?.title}</h2>
    <p>{post?.body}</p>
    <h6>Tags : {post?.tags} </h6>
    <button className='btn btn-primary' onClick={()=>navigation('/')}>Back</button>
    </div>
    
    </>
  )
}

export default PostDetail