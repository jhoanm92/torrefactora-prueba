package com.torrefactora.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "priority")
public class Priority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_priority")
    private Integer id;

    private String name;

    private String description;
}
