package com.torrefactora.service.impl;

import com.torrefactora.entity.Task;
import com.torrefactora.exception.ModeloNotFoundException;
import com.torrefactora.repository.TaskRepository;
import com.torrefactora.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository repository;

    @Override
    public List<Task> getAll() {
        return repository.findAll();
    }

    @Override
    public Task getById(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ModeloNotFoundException("ID NO ENCONTRADO " + id));
    }

    @Override
    public Task register(Task task) {
        return repository.save(task);
    }

    @Override
    public Task update(Task task) {
        this.getById(task.getId());
        return repository.save(task);
    }
}
