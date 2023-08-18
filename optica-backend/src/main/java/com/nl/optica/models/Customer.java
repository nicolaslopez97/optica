package com.nl.optica.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Entity(name = "customer")
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private String phone;
    private LocalDate date;
    private LocalDate targetDate;
    private String doctor;
    private String healthCare;
    private String healthCareId;
    private int farODEsf;
    private int farOIEsf;
    private String farColor;
    private String farFrame;
    private int closeODEsf;
    private int closeOIEsf;
    private String closeColor;
    private String closeFrame;
    private String bifocal;
    private String notes;
}
