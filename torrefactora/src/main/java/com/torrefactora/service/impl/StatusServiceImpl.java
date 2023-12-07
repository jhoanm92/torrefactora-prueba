package com.torrefactora.service.impl;

import com.torrefactora.entity.Status;
import com.torrefactora.repository.StatusRepository;
import com.torrefactora.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusServiceImpl implements StatusService {

    @Autowired
    private StatusRepository repository;

    @Override
    public List<Status> getAll() {
        return repository.findAll();
    }
}
