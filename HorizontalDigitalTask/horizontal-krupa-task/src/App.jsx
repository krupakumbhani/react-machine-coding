import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="py-8">
        <h1 className="font-bold text-center mb-8 mt-2">To Do List</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column mx-auto todo-box">
          <div className="flex mb-4">
            <button
              onClick={() => handleFilterChange("all")}
              className={`btn btn-secondary mx-2 ${
                filter === "all" ? "active" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleFilterChange("active")}
              className={`btn btn-secondary mx-2 ${
                filter === "active" ? "active" : ""
              }`}
            >
              Active
            </button>
            <button
              onClick={() => handleFilterChange("completed")}
              className={`btn btn-secondary mx-2 ${
                filter === "completed" ? "active" : ""
              }`}
            >
              Completed
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <p className="text-start fw-bold px-3">
              {filteredTodos.length} todos
            </p>
            {filteredTodos.map((todo) => (
              <div key={todo.id} className="w-100">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
