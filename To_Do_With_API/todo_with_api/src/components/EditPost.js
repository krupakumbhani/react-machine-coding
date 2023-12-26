import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const param = useParams()
    const [post, setpost] = useState()
    const [title, settitle] = useState()
    const [body, setbody] = useState()
    const [tags, settags] = useState()
    const [reactions, setreactions] = useState()
    const navigation = useNavigate()

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${param.id}`).then(res => res.json()).then(resp => setpost(resp))
    }, [param.id])

    
     function handleSubmit(e) {
       
        const postdata = { title,body,tags,reactions}
        try {
            fetch(`https://dummyjson.com/posts/${param.id}`, {
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postdata)
              })
              .then(res => res.json())
              .then(navigation('/'));
        } catch (error) {
            console.log(error)
        }

     }
  
    
 
    
    
  return (
    <>
    <h1>Edit Post</h1>
    <label htmlFor="title" className='mb-3'>Title : </label>
    <input type="text"  value={title} placeholder={post?.title} onChange={(e)=> settitle(e.target.value) } />
    <br />
    <label htmlFor="body" className='mb-3'>Body : </label>
    <input type="text"  value={body} placeholder={post?.body} onChange={(e)=> setbody(e.target.value) } />
    <br />
    <label htmlFor="title" className='mb-3'>Tags : </label>
    <input type="text"  value={tags} placeholder={post?.tags} onChange={(e)=> settags(e.target.value) } />
    <br />
    <label htmlFor="title" className='mb-3'>Reactions : </label>
    <input type="text"  value={reactions} placeholder={post?.reactions} onChange={(e)=> setreactions(e.target.value) } />
    <br />
    <button onClick={(e) => handleSubmit(e)} className='btn btn-primary'>Submit</button>
    </>
  )
}

export default EditPost