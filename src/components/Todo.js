"use client";
import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, checked: false }]);
      setNewTodo("");
    }
  };

  const handleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full px-4 py-2 mr-2 text-gray-900 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            item={todo}
            onCheck={() => handleCheck(index)}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
