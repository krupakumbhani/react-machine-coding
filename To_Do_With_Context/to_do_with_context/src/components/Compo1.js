import React, {useContext} from 'react'
import {TodoContext }from '../contexts/TodoContext'


const Compo1 = () => {
   const {todos} = useContext(TodoContext)
 
  return (
    <div>Compo1 </div>
  )
}

export default Compo1