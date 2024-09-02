
import React, { useState } from 'react';
import axios from 'axios';
import './EditTask.css';

const EditTask = ({ task, fetchTasks, cancelEdit }) => {
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        title: updatedTitle,
      });
      fetchTasks();
      cancelEdit(); 
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="edit-task-form">
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditTask;
