"use client";
import { useState } from "react";

const TodoItem = ({ item, onCheck, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const handleEdit = () => {
    onEdit(text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg shadow-md mb-3">
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={onCheck}
          className="mr-4 h-6 w-6 text-blue-500 bg-transparent border-2 border-white/30 rounded focus:ring-offset-0 focus:ring-blue-500/50 focus:ring-2 transition-all duration-300"
        />
        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 text-lg text-white bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300"
          />
        ) : (
          <span
            className={`text-lg ${item.checked ? "line-through text-white/50" : "text-white"}`}>
            {item.text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="px-4 py-2 text-white bg-green-600 rounded-lg mr-2 hover:bg-green-700 transition-colors duration-300"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-white bg-yellow-500 rounded-lg mr-2 hover:bg-yellow-600 transition-colors duration-300"
          >
            Edit
          </button>
        )}
        <button
          onClick={onRemove}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
