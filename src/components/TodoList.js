"use client";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheck, onRemove, onEdit }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          item={todo}
          onCheck={() => onCheck(index)}
          onRemove={() => onRemove(index)}
          onEdit={(newText) => onEdit(index, newText)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
