import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TodoField = ({todo}) => {
    const [editable, setEditable] = useState(false)
    const [todomsg, setTodomsg] = useState(todo.todo)
    const {editTodo, deleteTodo, toggleComplete} =  useContext(TodoContext)
    const edit = () => {
        editTodo(todo.id,{...todo,todo:todomsg})
        setEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
    const deleted = () => {
        
        deleteTodo(todo.id)
    }
  return (
    <>
    <div className='field-box' style={{backgroundColor: todo.completed ? 'yellow' : 'grey'}}>
    <input type="checkbox" className='mx-2' onChange={toggleCompleted}/>
    <input type="text" className='field-text' value={todomsg} onChange={(e) => setTodomsg(e.target.value)} readOnly={!editable} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}/>
    <span><button className='btn btn-info mx-2' onClick={()=>{
        if (todo.complete) {
            return;
        }
        if (editable) {
            edit();
        }else{
            setEditable((prev)=> !prev)
        }
    }} disabled={todo.complete}>{editable? "UPDATE" : "EDIT"}</button></span> 
    <span><button className='btn btn-danger mx-1' onClick={deleted}>Delete</button></span> 
    </div>
    
    </>
  )
}

export default TodoField