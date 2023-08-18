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
        customer.setFarOIEsf(customerDTO.getFarOIEsf());
        customer.setFarColor(customerDTO.getFarColor());
        customer.setFarFrame(customerDTO.getFarFrame());
        customer.setCloseODEsf(customerDTO.getCloseODEsf());
        customer.setCloseOIEsf(customerDTO.getCloseOIEsf());
        customer.setCloseColor(customerDTO.getCloseColor());
        customer.setCloseFrame(customerDTO.getCloseFrame());
        customer.setBifocal(customerDTO.getBifocal());
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
        customer.setFarOIEsf(customerDTO.getFarOIEsf());
        customer.setFarColor(customerDTO.getFarColor());
        customer.setFarFrame(customerDTO.getFarFrame());
        customer.setCloseODEsf(customerDTO.getCloseODEsf());
        customer.setCloseOIEsf(customerDTO.getCloseOIEsf());
        customer.setCloseColor(customerDTO.getCloseColor());
        customer.setCloseFrame(customerDTO.getCloseFrame());
        customer.setBifocal(customerDTO.getBifocal());
        customer.setNotes(customerDTO.getNotes());

        repository.save(customer);
    }

    @Override
    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }
}
