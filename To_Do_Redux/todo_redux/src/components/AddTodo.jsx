import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todoslice";

const AddTodo = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const addtodohandle = (e) => {
        e.preventDefault();
       dispatch(addTodo(input))
       setInput('')

    }
  return (
    <>
    <form onSubmit={addtodohandle}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add</button>
    </form>
    </>
  )
}

export default AddTodo