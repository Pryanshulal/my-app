import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomePage = () => {
  const [tasks, setTasks] = useState([]); // State to manage tasks

  const addTask = (task) => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]); // Add task to the list
    }
  };

  return (
    <MainLayout>
      <h1>Home Page</h1>
      <ToDoList tasks={tasks} /> {/* Pass tasks as a prop */}
      <ToDoForm onAddTask={addTask} /> {/* Pass addTask as a prop */}
    </MainLayout>
  );
};

export default HomePage;
