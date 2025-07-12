"use client";

const TodoItem = ({ item, onCheck, onRemove }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={onCheck}
          className="mr-4"
        />
        <span className={item.checked ? "line-through" : ""}>{item.text}</span>
      </div>
      <button
        onClick={onRemove}
        className="px-2 py-1 text-white bg-red-500 rounded-lg"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
