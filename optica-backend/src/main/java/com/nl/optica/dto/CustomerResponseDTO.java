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
    private String height;
    private String farBifocalDI;
    private String closeBifocalDI;
    private String metallic;
    private String notes;

    public CustomerResponseDTO(Long id, String name, String lastName, String phone, LocalDate date, LocalDate targetDate, String doctor, String healthCare, String healthCareId, double farODEsf,double farODCil, double farODAngle, double farOIEsf, double farOICil, double farOIAngle, String farColor, String farFrame, String farDI, double closeODEsf, double closeODCil, double closeODAngle, double closeOIEsf, double closeOICil, double closeOIAngle, String closeColor, String closeFrame, String closeDI, String bifocal, String height, String farBifocalDI, String closeBifocalDI, String metallic, String notes) {
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
        this.farODCil = farODCil;
        this.farODAngle = farODAngle;
        this.farOIEsf = farOIEsf;
        this.farOICil = farOICil;
        this.farOIAngle = farOIAngle;
        this.farColor = farColor;
        this.farFrame = farFrame;
        this.farDI = farDI;
        this.closeODEsf = closeODEsf;
        this.closeODCil = closeODCil;
        this.closeODAngle = closeODAngle;
        this.closeOIEsf = closeOIEsf;
        this.closeOICil = closeOICil;
        this.closeOIAngle = closeOIAngle;
        this.closeColor = closeColor;
        this.closeFrame = closeFrame;
        this.closeDI = closeDI;
        this.bifocal = bifocal;
        this.height = height;
        this.farBifocalDI = farBifocalDI;
        this.closeBifocalDI = closeBifocalDI;
        this.metallic = metallic;
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
                customer.getFarODCil(),
                customer.getFarODAngle(),
                customer.getFarOIEsf(),
                customer.getFarOICil(),
                customer.getFarOIAngle(),
                customer.getFarColor(),
                customer.getFarFrame(),
                customer.getFarDI(),
                customer.getCloseODEsf(),
                customer.getCloseODCil(),
                customer.getCloseODAngle(),
                customer.getCloseOIEsf(),
                customer.getCloseOICil(),
                customer.getCloseOIAngle(),
                customer.getCloseColor(),
                customer.getCloseFrame(),
                customer.getCloseDI(),
                customer.getBifocal(),
                customer.getHeight(),
                customer.getFarBifocalDI(),
                customer.getCloseBifocalDI(),
                customer.getMetallic(),
                customer.getNotes()
        );
    }
}
