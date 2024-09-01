import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="app-background">
      <nav className="navbar">
        <h1>My To-Do App</h1>
      </nav>
      <div className="app-container">
        <h1>To-Do List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
