package com.nl.optica.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Entity(name = "customer")
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
    private String height;
    private String farBifocalDI;
    private String closeBifocalDI;
    private String metallic;
    private String notes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getHealthCare() {
        return healthCare;
    }

    public void setHealthCare(String healthCare) {
        this.healthCare = healthCare;
    }

    public String getHealthCareId() {
        return healthCareId;
    }

    public void setHealthCareId(String healthCareId) {
        this.healthCareId = healthCareId;
    }

    public double getFarODEsf() {
        return farODEsf;
    }

    public void setFarODEsf(double farODEsf) {
        this.farODEsf = farODEsf;
    }

    public double getFarODCil() {
        return farODCil;
    }

    public void setFarODCil(double farODCil) {
        this.farODCil = farODCil;
    }

    public double getFarODAngle() {
        return farODAngle;
    }

    public void setFarODAngle(double farODAngle) {
        this.farODAngle = farODAngle;
    }

    public double getFarOIEsf() {
        return farOIEsf;
    }

    public void setFarOIEsf(double farOIEsf) {
        this.farOIEsf = farOIEsf;
    }

    public double getFarOICil() {
        return farOICil;
    }

    public void setFarOICil(double farOICil) {
        this.farOICil = farOICil;
    }

    public double getFarOIAngle() {
        return farOIAngle;
    }

    public void setFarOIAngle(double farOIAngle) {
        this.farOIAngle = farOIAngle;
    }

    public String getFarColor() {
        return farColor;
    }

    public void setFarColor(String farColor) {
        this.farColor = farColor;
    }

    public String getFarFrame() {
        return farFrame;
    }

    public void setFarFrame(String farFrame) {
        this.farFrame = farFrame;
    }

    public String getFarDI() {
        return farDI;
    }

    public void setFarDI(String farDI) {
        this.farDI = farDI;
    }

    public double getCloseODEsf() {
        return closeODEsf;
    }

    public void setCloseODEsf(double closeODEsf) {
        this.closeODEsf = closeODEsf;
    }

    public double getCloseODCil() {
        return closeODCil;
    }

    public void setCloseODCil(double closeODCil) {
        this.closeODCil = closeODCil;
    }

    public double getCloseODAngle() {
        return closeODAngle;
    }

    public void setCloseODAngle(double closeODAngle) {
        this.closeODAngle = closeODAngle;
    }

    public double getCloseOIEsf() {
        return closeOIEsf;
    }

    public void setCloseOIEsf(double closeOIEsf) {
        this.closeOIEsf = closeOIEsf;
    }

    public double getCloseOICil() {
        return closeOICil;
    }

    public void setCloseOICil(double closeOICil) {
        this.closeOICil = closeOICil;
    }

    public double getCloseOIAngle() {
        return closeOIAngle;
    }

    public void setCloseOIAngle(double closeOIAngle) {
        this.closeOIAngle = closeOIAngle;
    }

    public String getCloseColor() {
        return closeColor;
    }

    public void setCloseColor(String closeColor) {
        this.closeColor = closeColor;
    }

    public String getCloseFrame() {
        return closeFrame;
    }

    public void setCloseFrame(String closeFrame) {
        this.closeFrame = closeFrame;
    }

    public String getCloseDI() {
        return closeDI;
    }

    public void setCloseDI(String closeDI) {
        this.closeDI = closeDI;
    }

    public String getBifocal() {
        return bifocal;
    }

    public void setBifocal(String bifocal) {
        this.bifocal = bifocal;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getFarBifocalDI() {
        return farBifocalDI;
    }

    public void setFarBifocalDI(String farBifocalDI) {
        this.farBifocalDI = farBifocalDI;
    }

    public String getCloseBifocalDI() {
        return closeBifocalDI;
    }

    public void setCloseBifocalDI(String closeBifocalDI) {
        this.closeBifocalDI = closeBifocalDI;
    }

    public String getMetallic() {
        return metallic;
    }

    public void setMetallic(String metallic) {
        this.metallic = metallic;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
