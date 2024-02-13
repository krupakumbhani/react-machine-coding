import React, { useState } from 'react'
import { useTodo } from '../contexts/index';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className="d-flex border border-1 border-light rounded-lg p-3 gap-3 text-black align-items-center">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className="border-1 border-light form-control bg-transparent"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className={`btn btn-outline-dark ${isTodoEditable && 'disabled:opacity-50'}`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable(prev => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📝" : "✏️"}
      </button>
      <button
        className="btn btn-outline-dark"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
