"use client";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [isClient, setIsClient] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsClient(true);
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isClient]);

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

  const handleEdit = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.checked;
    }
    if (filter === "completed") {
      return todo.checked;
    }
    return true;
  });

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white/20 rounded-xl shadow-2xl backdrop-blur-lg">
      <div className="flex mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full px-5 py-3 mr-4 text-lg text-white bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300"
          placeholder="Add a new task..."
        />
        <button
          onClick={handleAddTodo}
          className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Add
        </button>
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 mx-2 rounded-lg font-medium transition-all duration-300 ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-white/20 text-white/80 hover:bg-white/30"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-6 py-2 mx-2 rounded-lg font-medium transition-all duration-300 ${
            filter === "active"
              ? "bg-blue-600 text-white"
              : "bg-white/20 text-white/80 hover:bg-white/30"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-6 py-2 mx-2 rounded-lg font-medium transition-all duration-300 ${
            filter === "completed"
              ? "bg-blue-600 text-white"
              : "bg-white/20 text-white/80 hover:bg-white/30"
          }`}
        >
          Completed
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        onCheck={handleCheck}
        onRemove={handleRemove}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Todo;
