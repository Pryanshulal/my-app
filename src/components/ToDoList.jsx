import React from 'react';

const ToDoList = ({ tasks }) => {
  return (
    <div>
      <h2>Your To-Do List:</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add a task to get started!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li> // Display each task
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
