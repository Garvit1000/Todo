import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';
import EditTask from './EditTask'; 
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null); 

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (newTask.trim() === '') return;

    try {
      await axios.post('http://localhost:5000/api/tasks', {
        title: newTask,
        completed: false,
      });
      setNewTask('');
      fetchTasks(); 
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const startEditingTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasklist-container">
      <div className="tasklist-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <div key={task._id}>
          {editingTaskId === task._id ? (
            <EditTask 
              task={task} 
              fetchTasks={fetchTasks} 
              cancelEdit={cancelEdit} 
            />
          ) : (
            <Task 
              task={task} 
              fetchTasks={fetchTasks} 
              startEditingTask={startEditingTask} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
