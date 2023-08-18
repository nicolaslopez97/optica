package com.nl.optica.services;

import com.nl.optica.dto.CustomerRequestDTO;
import com.nl.optica.models.Customer;

import java.util.List;

public interface CustomerService {
    Customer getCustomerById(Long id);
    List<Customer> getAllCustomers();
    Customer addCustomer(CustomerRequestDTO customer);
    void updateCustomer(Long id, CustomerRequestDTO customer);
    void deleteCustomer(Long id);
}
