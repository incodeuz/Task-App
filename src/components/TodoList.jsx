// TodoList.js
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  onAddTask,
  onEditTask,
}) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="border border-gray-300 rounded-lg py-2 px-4 mb-2 w-full"
        placeholder="Enter task..."
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Add Task
      </button>
      <ul className="mt-4">
        {tasks?.length > 0
          ? tasks?.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggleTaskCompletion={onToggleTaskCompletion}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            ))
          : "No todos here"}
      </ul>
    </div>
  );
};

export default TodoList;
