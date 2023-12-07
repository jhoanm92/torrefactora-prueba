package com.torrefactora.controller;


import com.torrefactora.entity.Status;
import com.torrefactora.service.StatusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    private StatusService service;

    private static final Logger log = LoggerFactory.getLogger(StatusController.class);

    @GetMapping
    public List<Status> getAll() {
        log.info("REST - To get all");
        return service.getAll();
    }
}
