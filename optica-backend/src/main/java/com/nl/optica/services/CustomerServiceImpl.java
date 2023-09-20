package com.nl.optica.services;

import com.nl.optica.dto.CustomerRequestDTO;
import com.nl.optica.models.Customer;
import com.nl.optica.repositories.CustomerRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository repository;

    @Override
    public Customer getCustomerById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(String.format("Entity with ID: %s was not found", id))
        );
    }

    @Override
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    @Override
    public Customer addCustomer(CustomerRequestDTO customerDTO) {
        Customer customer = new Customer();

        customer.setName(customerDTO.getName());
        customer.setLastName(customerDTO.getLastName());
        customer.setPhone(customerDTO.getPhone());
        customer.setDate(customerDTO.getDate());
        customer.setTargetDate(customerDTO.getTargetDate());
        customer.setDoctor(customerDTO.getDoctor());
        customer.setHealthCare(customerDTO.getHealthCare());
        customer.setHealthCareId(customerDTO.getHealthCareId());
        customer.setFarODEsf(customerDTO.getFarODEsf());
        customer.setFarODCil(customerDTO.getFarODCil());
        customer.setFarODAngle(customerDTO.getFarODAngle());
        customer.setFarOIEsf(customerDTO.getFarOIEsf());
        customer.setFarOICil(customerDTO.getFarOICil());
        customer.setFarOIAngle(customerDTO.getFarOIAngle());
        customer.setFarColor(customerDTO.getFarColor());
        customer.setFarFrame(customerDTO.getFarFrame());
        customer.setFarDI(customerDTO.getFarDI());
        customer.setCloseODEsf(customerDTO.getCloseODEsf());
        customer.setCloseODCil(customerDTO.getCloseODCil());
        customer.setCloseODAngle(customerDTO.getCloseODAngle());
        customer.setCloseOIEsf(customerDTO.getCloseOIEsf());
        customer.setCloseOICil(customerDTO.getCloseOICil());
        customer.setCloseOIAngle(customerDTO.getCloseOIAngle());
        customer.setCloseColor(customerDTO.getCloseColor());
        customer.setCloseFrame(customerDTO.getCloseFrame());
        customer.setCloseDI(customerDTO.getCloseDI());
        customer.setBifocal(customerDTO.getBifocal());
        customer.setHeight(customerDTO.getHeight());
        customer.setFarBifocalDI(customerDTO.getFarBifocalDI());
        customer.setCloseBifocalDI(customerDTO.getCloseBifocalDI());
        customer.setMetallic(customerDTO.getMetallic());
        customer.setNotes(customerDTO.getNotes());

        return repository.save(customer);
    }

    @Override
    public void updateCustomer(Long id, CustomerRequestDTO customerDTO) {
        Customer customer = repository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(String.format("Entity with ID: %s was not found", id))
        );

        customer.setName(customerDTO.getName());
        customer.setLastName(customerDTO.getLastName());
        customer.setPhone(customerDTO.getPhone());
        customer.setDate(customerDTO.getDate());
        customer.setTargetDate(customerDTO.getTargetDate());
        customer.setDoctor(customerDTO.getDoctor());
        customer.setHealthCare(customerDTO.getHealthCare());
        customer.setHealthCareId(customerDTO.getHealthCareId());
        customer.setFarODEsf(customerDTO.getFarODEsf());
        customer.setFarODCil(customerDTO.getFarODCil());
        customer.setFarODAngle(customerDTO.getFarODAngle());
        customer.setFarOIEsf(customerDTO.getFarOIEsf());
        customer.setFarOICil(customerDTO.getFarOICil());
        customer.setFarOIAngle(customerDTO.getFarOIAngle());
        customer.setFarColor(customerDTO.getFarColor());
        customer.setFarFrame(customerDTO.getFarFrame());
        customer.setFarDI(customerDTO.getFarDI());
        customer.setCloseODEsf(customerDTO.getCloseODEsf());
        customer.setCloseODCil(customerDTO.getCloseODCil());
        customer.setCloseODAngle(customerDTO.getCloseODAngle());
        customer.setCloseOIEsf(customerDTO.getCloseOIEsf());
        customer.setCloseOICil(customerDTO.getCloseOICil());
        customer.setCloseOIAngle(customerDTO.getCloseOIAngle());
        customer.setCloseColor(customerDTO.getCloseColor());
        customer.setCloseFrame(customerDTO.getCloseFrame());
        customer.setCloseDI(customerDTO.getCloseDI());
        customer.setBifocal(customerDTO.getBifocal());
        customer.setHeight(customerDTO.getHeight());
        customer.setFarBifocalDI(customerDTO.getFarBifocalDI());
        customer.setCloseBifocalDI(customerDTO.getCloseBifocalDI());
        customer.setMetallic(customerDTO.getMetallic());
        customer.setNotes(customerDTO.getNotes());

        repository.save(customer);
    }

    @Override
    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }
}
