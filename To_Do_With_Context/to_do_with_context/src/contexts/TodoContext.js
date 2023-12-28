import { createContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    editTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { },
});

