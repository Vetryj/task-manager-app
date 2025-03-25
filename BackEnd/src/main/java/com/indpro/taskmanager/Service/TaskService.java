package com.indpro.taskmanager.Service;

import com.indpro.taskmanager.Model.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> getAllTasks();
    Optional<Task> getTaskById(Long id);
    List<Task> searchTasks(String title);
    List<Task> filterTasks(String category, String status);
    Task createTask(Task task);
    Task updateTask(Long id, Task taskDetails);
    void deleteTask(Long id);
}
