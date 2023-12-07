package com.torrefactora.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_task")
    private Integer id;

    private String name;

    private String description;

    private LocalDateTime beginDate;

    private LocalDateTime endDate;

    @ManyToOne
    @JoinColumn(name = "id_priority_fk", referencedColumnName = "id_priority")
    private Priority priority;

    @ManyToOne
    @JoinColumn(name = "id_status_fk", referencedColumnName = "id_status")
    private Status status;
}
