import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoContextProvider from './contexts/TodoContextProvider';
import TodoField from './components/TodoField';
import { useState,useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([])
    useEffect(() => {
     
        const todos = JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0){
          setTodos(todos)
        }
      }, [])
      useEffect(() => { 
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])

     
  return (
    <TodoContextProvider >
    <h1>TO DO WITH CONTEXT AND LOCAL STORAGE</h1>
    <TodoForm />
    {todos && 
      todos.map((todo) => (
        <div key={todo.id}>
          <TodoField todo = {todo} />
        </div>
      ))
    }
    </TodoContextProvider>
  );
}

export default App;
