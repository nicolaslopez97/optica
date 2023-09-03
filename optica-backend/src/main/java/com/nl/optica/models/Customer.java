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
    private double farODEsf;
    private double farODCil;
    private double farODAngle;
    private double farOIEsf;
    private double farOICil;
    private double farOIAngle;
    private String farColor;
    private String farFrame;
    private String farDI;
    private double closeODEsf;
    private double closeODCil;
    private double closeODAngle;
    private double closeOIEsf;
    private double closeOICil;
    private double closeOIAngle;
    private String closeColor;
    private String closeFrame;
    private String closeDI;
    private String bifocal;
    private double height;
    private double farBifocalDI;
    private double closeBifocalDI;
    private String metallic;
    private String notes;
}
