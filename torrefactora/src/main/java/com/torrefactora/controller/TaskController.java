package com.torrefactora.controller;

import com.torrefactora.entity.Task;
import com.torrefactora.exception.ModeloNotFoundException;
import com.torrefactora.service.TaskService;
import com.torrefactora.service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private TaskService service;

    private static final Logger log = LoggerFactory.getLogger(TaskController.class);

    @GetMapping
    public List<Task> getAll() {
        log.info("REST - To get all");
        return service.getAll();
    }

    @GetMapping("/{id}")
    public List<Task> getById(@PathVariable("id") Integer id) {
        return service.getAll();
    }

    @PostMapping
    public Task register(@RequestBody Task task) {
        log.info("REST - Request to register : {}", task);
        return service.register(task);
    }

    @PutMapping
    public Task update(@RequestBody Task task) {
        log.info("REST - Request to update : {}", task);
        return service.update(task);
    }
}
