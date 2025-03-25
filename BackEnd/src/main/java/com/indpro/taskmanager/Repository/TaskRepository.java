package com.indpro.taskmanager.Repository;


import com.indpro.taskmanager.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    // Search tasks by title (case-insensitive)
    List<Task> findByTitleContaining(String title);

    // Filter tasks by category
    List<Task> findByCategory(String category);

    // Filter tasks by status (Pending/Completed)
    List<Task> findByStatus(String status);
}