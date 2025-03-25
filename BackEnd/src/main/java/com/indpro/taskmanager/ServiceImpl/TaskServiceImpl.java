package com.indpro.taskmanager.ServiceImpl;

import com.indpro.taskmanager.Model.Task;
import com.indpro.taskmanager.Repository.TaskRepository;
import com.indpro.taskmanager.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public List<Task> searchTasks(String title) {
        return taskRepository.findByTitleContaining(title);
    }

    @Override
    public List<Task> filterTasks(String category, String status) {
        if (category != null && !category.isEmpty()) {
            return taskRepository.findByCategory(category);
        } else if (status != null && !status.isEmpty()) {
            return taskRepository.findByStatus(status);
        }
        return taskRepository.findAll();
    }

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(Long id, Task taskDetails) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setCategory(taskDetails.getCategory());
            task.setStatus(taskDetails.getStatus());
            task.setPriority(taskDetails.getPriority());
            task.setDueDate(taskDetails.getDueDate());
            return taskRepository.save(task);
        } else {
            throw new RuntimeException("Task not found with ID: " + id);
        }
    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
