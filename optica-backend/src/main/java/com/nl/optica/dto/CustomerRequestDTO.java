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
    public int farODEsf;
    public int farOIEsf;
    public String farColor;
    public String farFrame;
    public int closeODEsf;
    public int closeOIEsf;
    public String closeColor;
    public String closeFrame;
    public String bifocal;
    public String notes;
}
