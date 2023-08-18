package com.nl.optica.dto;

import com.nl.optica.models.Customer;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CustomerResponseDTO {
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

    public CustomerResponseDTO(Long id, String name, String lastName, String phone, LocalDate date, LocalDate targetDate, String doctor, String healthCare, String healthCareId, int farODEsf, int farOIEsf, String farColor, String farFrame, int closeODEsf, int closeOIEsf, String closeColor, String closeFrame, String bifocal, String notes) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.date = date;
        this.targetDate = targetDate;
        this.doctor = doctor;
        this.healthCare = healthCare;
        this.healthCareId = healthCareId;
        this.farODEsf = farODEsf;
        this.farOIEsf = farOIEsf;
        this.farColor = farColor;
        this.farFrame = farFrame;
        this.closeODEsf = closeODEsf;
        this.closeOIEsf = closeOIEsf;
        this.closeColor = closeColor;
        this.closeFrame = closeFrame;
        this.bifocal = bifocal;
        this.notes = notes;
    }

    public static CustomerResponseDTO of (Customer customer){
        return new CustomerResponseDTO(
                customer.getId(),
                customer.getName(),
                customer.getLastName(),
                customer.getPhone(),
                customer.getDate(),
                customer.getTargetDate(),
                customer.getDoctor(),
                customer.getHealthCare(),
                customer.getHealthCareId(),
                customer.getFarODEsf(),
                customer.getFarOIEsf(),
                customer.getFarColor(),
                customer.getFarFrame(),
                customer.getCloseODEsf(),
                customer.getCloseOIEsf(),
                customer.getCloseColor(),
                customer.getCloseFrame(),
                customer.getBifocal(),
                customer.getNotes()
        );
    }
}
