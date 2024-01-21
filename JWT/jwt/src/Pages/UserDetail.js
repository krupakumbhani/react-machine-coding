import React,{useEffect,useState} from 'react'

const UserDetail = () => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
      fetch('https://dummyjson.com/auth/me',{
        method : 'GET',
        headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }
      ).then((res) => res.json()).then((res) => setDetail(res))
    
     
    }, [])
    
  return (
    <>
    <h1>Welcome {detail.username}</h1>
    </>
  )
}

export default UserDetail