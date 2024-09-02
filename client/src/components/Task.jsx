import React, { useState } from 'react';
import axios from 'axios';
import './Task.css'; 

const Task = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

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

  const editTask = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const saveEdit = async () => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        title: editedTitle,
      });
      setIsEditing(false);
      fetchTasks(); 
    } catch (error) {
      console.error('Error saving task edit:', error);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(task.title); 
  };

  return (
    <div className={`tasklist ${task.completed ? 'done' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      ) : (
        <div onClick={toggleComplete}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleComplete}
          />
          <span>{task.title}</span>
        </div>
      )}
      <div className="tasklist-actions">
        <button className="edit" onClick={editTask}>
          Edit
        </button>
        <button className="trash" onClick={deleteTask}>
          <svg viewBox="0 0 24 24">
            <path d="M3 6h18v2H3V6zm3 3h12v12H6V9zm5 3h2v7h-2v-7zm-4 0h2v7H7v-7zm8 0h2v7h-2v-7z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Task;
