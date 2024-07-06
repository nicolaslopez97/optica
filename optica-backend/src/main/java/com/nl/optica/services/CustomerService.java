package com.nl.optica.services;

import com.nl.optica.dto.CustomerRequestDTO;
import com.nl.optica.models.Customer;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

public interface CustomerService {
    Customer getCustomerById(Long id);
    Page<Customer> getAllCustomers(Map<String, String> params);
    Customer addCustomer(CustomerRequestDTO customer);
    void updateCustomer(Long id, CustomerRequestDTO customer);
    void deleteCustomer(Long id);
}
