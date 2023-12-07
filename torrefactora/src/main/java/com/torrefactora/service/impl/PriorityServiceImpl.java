package com.torrefactora.service.impl;

import com.torrefactora.entity.Priority;
import com.torrefactora.exception.ModeloNotFoundException;
import com.torrefactora.repository.PriorityRepository;
import com.torrefactora.service.PriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriorityServiceImpl implements PriorityService {

    @Autowired
    private PriorityRepository repository;

    @Override
    public List<Priority> getAll() {
        return repository.findAll();
    }


}
