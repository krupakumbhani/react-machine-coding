import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from "../features/todoslice";


const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editText, setEditText] = useState("")
    const [editId, setEditId] = useState()
    const handleEdit = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }
    const handleUpdate = () => {
        dispatch(updateTodo({id:editId, newText: editText}))
        setEditId(null)
        setEditText('')
    }

  return (
    <>
    <ul>
        {
            todos.map((todo) => (
                <li key={todo.id}>
                    {(editId === todo.id) ?
                    <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button onClick={() => handleUpdate()}>Update</button>
                    </>    
                    :
                    <>
                    {todo.text}
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    </>    
                }

                
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default Todo