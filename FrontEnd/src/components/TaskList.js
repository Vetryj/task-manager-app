import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import TaskItem from "./TaskItem";
import "../styles/styles.css";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks(); // Fetch tasks when component loads
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      console.log("Fetched Tasks:", data);
      // Check if data is an array before setting
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        setTasks([]);
        console.warn("Data received is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]); // Set to empty array on error
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks(); // Refresh list after deletion
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;