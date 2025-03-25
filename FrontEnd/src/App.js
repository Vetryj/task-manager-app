import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/styles.css";

function App() {
  const [refreshTasks, setRefreshTasks] = useState(false);

  const handleTaskSubmit = () => {
    setRefreshTasks(!refreshTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onTaskSubmit={handleTaskSubmit} />
      <TaskList refresh={refreshTasks} />
    </div>
  );
}

export default App;