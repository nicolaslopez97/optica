package com.nl.optica.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CustomerRequestDTO {
    public String name;
    public String lastName;
    public String phone;
    public LocalDate date;
    public LocalDate targetDate;
    public String doctor;
    public String healthCare;
    public String healthCareId;
    public double farODEsf;
    public double farODCil;
    public double farODAngle;
    public double farOIEsf;
    public double farOICil;
    public double farOIAngle;
    public String farColor;
    public String farFrame;
    public String farDI;
    public double closeODEsf;
    public double closeODCil;
    public double closeODAngle;
    public double closeOIEsf;
    public double closeOICil;
    public double closeOIAngle;
    public String closeColor;
    public String closeFrame;
    public String closeDI;
    public String bifocal;
    public double height;
    public double farBifocalDI;
    public double closeBifocalDI;
    public String metallic;
    public String notes;
}
