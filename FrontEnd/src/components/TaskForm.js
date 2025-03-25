import React, { useState } from "react";
import { createTask } from "../services/api";

const TaskForm = ({ onTaskSubmit }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    onTaskSubmit(); // Refresh Task List
    resetForm(); // Clear the form after submission
  };

  const resetForm = () => {
    setTask({
      title: "",
      description: "",
      category: "",
      status: "Pending",
      priority: "Medium",
      dueDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={task.category}
        onChange={handleChange}
      />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;