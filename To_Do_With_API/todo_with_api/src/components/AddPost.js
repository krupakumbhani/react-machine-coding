import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
    const [title, settitle] = useState("")
    const [userId, setuserId] = useState("")
    const [tags, settags] = useState("")
    const [reactions, setreactions] = useState("")
    let navigation = useNavigate()
    function backtohome() {
        navigation('/')
    }
    function createpost(e) {
        
        let postObj = {title,userId,tags,reactions}
        console.log(postObj)
        fetch('https://dummyjson.com/posts/add',
        {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(postObj)
        }
        ).then(res => res.json()).then(res => console.log(res))
        navigation('/')
        console.log("post thayu")
    }
    
    return (
        <>
            <h1>Create Post</h1>
            <div className='outer-box'>
                <form>
                    <label htmlFor="title" fonr>Title : </label>
                    <input type="text" name='title' className='form-input' onChange={(e) => settitle(e.target.value)} />
                    <br/>
                    <label htmlFor="userId">UserId : </label>
                    <input type="text" name='userId' className='form-input' onChange={(e) => setuserId(e.target.value)}/>
                    <br/>
                    <label htmlFor="tags">Tags : </label>
                    <input type="text" name='tags' className='form-input' onChange={(e) => settags(e.target.value)}/>
                   <br/>
                    <label htmlFor="reactions">Reactions : </label>
                    <input type="text" name='reactions' className='form-input' onChange={(e) => setreactions(e.target.value)} />
                    <br />
                    <button className='btn btn-success mx-2' onClick={(e)=>createpost(e)}>Create</button>
                    <button className='btn btn-danger mx-2' onClick={()=>backtohome()}>Back</button>
                </form>
            </div>

        </>
    )
}

export default AddPost