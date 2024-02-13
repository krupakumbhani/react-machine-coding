import React, { useState } from "react";
import { useTodo } from "../contexts/index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="d-flex flex-column justify-content-center align-items-center">
      <label className="mb-2">What needs to be done?</label>

      <div className="d-flex flex-column">
        <input
          type="text"
          placeholder=""
          className="form-control border border-dark flex-grow px-2 outline-none py-1.5 mb-3 mr-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="btn btn-dark px-3 py-1">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
