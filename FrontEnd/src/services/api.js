import axios from "axios";

// Base URL for backend API
const API_URL = "http://localhost:8080/api/tasks";

// Get all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// Create a new task
export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Delete a task by ID
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

// Update a task by ID
export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};