import { TodoContext } from "./TodoContext";
import { useState,useEffect } from "react";
const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    // useEffect(() => {
    //     console.log("provider vali useeffect1")
    //     const storedtodos = JSON.parse(localStorage.getItem("todos"))
    //     if(storedtodos && storedtodos.length > 0){
    //       setTodos(storedtodos)
    //     }
    //   }, [])
    //   useEffect(() => { 
    //     console.log("provider vali useeffect2")
    //     localStorage.setItem("todos", JSON.stringify(todos))
    //   }, [todos])
  
    const addTodo = (todo) => {
        setTodos((prev) => [...prev, todo ])
    }
    const editTodo = (id, todo) => {
        setTodos((prev) => prev.map((p) => (p.id === id ? todo : p)))
    }
    const deleteTodo = (id) => {
        console.log('Deleting todo with id:', id);
        setTodos((prev) => prev.filter((p) => (p.id !== id)))
    }
    const toggleComplete = (id) => {
        console.log('Toggling complete for todo with id:', id);
        setTodos((prev) => prev.map((p) => (p.id === id ? { ...p, completed: !p.completed } : p)))
    }
    

    return (
        <TodoContext.Provider value={
            {
                todos,
                addTodo,
                editTodo,
                deleteTodo,
                toggleComplete
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
