import React from 'react';
import axios from 'axios';
import './Task.css'; 

const Task = ({ task, fetchTasks }) => {
  const toggleComplete = async () => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        completed: !task.completed,
      });
      fetchTasks(); 
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      fetchTasks(); 
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className={`tasklist ${task.completed ? 'done' : ''}`}>
      <div onClick={toggleComplete}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span>{task.title}</span>
      </div>
      <button className="trash" onClick={deleteTask}>
        <svg viewBox="0 0 24 24">
          <path d="M3 6h18v2H3V6zm3 3h12v12H6V9zm5 3h2v7h-2v-7zm-4 0h2v7H7v-7zm8 0h2v7h-2v-7z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Task;
