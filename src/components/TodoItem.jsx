// TodoItem.js
import React, { useState } from "react";

const TodoItem = ({
  task,
  onToggleTaskCompletion,
  onDeleteTask,
  onEditTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task.text);

  const handleEditInputChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  const handleEditTask = () => {
    if (editedTaskText.trim() !== "") {
      onEditTask(task.id, editedTaskText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-300">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTaskCompletion(task)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTaskText}
            onChange={handleEditInputChange}
            className="border-b border-transparent focus:outline-none focus:border-gray-400"
          />
        ) : (
          <span
            className={
              task.completed ? "line-through text-gray-500" : "text-black"
            }
          >
            {task.text}
          </span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button
            onClick={handleEditTask}
            className="text-blue-500 hover:text-blue-600 mr-2"
          >
            <i class="bx bx-check-square"></i>
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 mr-2"
          >
            <i class="bx bx-edit-alt"></i>
          </button>
        )}
        <button
          onClick={() => onDeleteTask(task.id)}
          className="text-red-500 hover:text-red-600"
        >
          <i class="bx bx-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
