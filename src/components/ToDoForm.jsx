import React, { useState } from 'react';

const ToDoForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    onAddTask(task); // Call the addTask function passed from HomePage
    setTask(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a new task:
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;
