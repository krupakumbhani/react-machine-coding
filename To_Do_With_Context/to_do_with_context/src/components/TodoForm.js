import React, {useContext, useState} from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const [todo, settodo] = useState("")
    const add = () => {
        if(!todo.trim()) return;
        addTodo({id:Date.now(), todo:todo, completed:false});
        settodo("")
    }

   
  return (
    <>
   <input type="text" className='m-3 ' value={todo} onChange={(e) => settodo(e.target.value)} />
   <span><button className='btn btn-warning' onClick={add}>Create</button></span> 
    </>
  )
}

export default TodoForm