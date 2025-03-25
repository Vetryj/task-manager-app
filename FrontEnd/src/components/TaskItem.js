import React from "react";
import "../styles/styles.css";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        <strong>Category:</strong> {task.category}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;