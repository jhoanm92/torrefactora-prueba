package com.torrefactora.controller;

import com.torrefactora.entity.Priority;
import com.torrefactora.exception.ModeloNotFoundException;
import com.torrefactora.service.PriorityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/priority")
public class PriorityController {

    @Autowired
    private PriorityService service;

    private static final Logger log = LoggerFactory.getLogger(PriorityController.class);

    @GetMapping
    public List<Priority> getAll() {
        return service.getAll();
    }

}
