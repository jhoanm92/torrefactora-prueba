package com.torrefactora.service;

import com.torrefactora.entity.Priority;
import com.torrefactora.entity.Task;

import java.util.List;

public interface TaskService {

    List<Task> getAll();

    Task getById(Integer id);

    Task register(Task priority);

    Task update(Task priority);

}
