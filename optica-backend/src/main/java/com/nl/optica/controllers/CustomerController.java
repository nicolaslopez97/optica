package com.nl.optica.controllers;

import com.nl.optica.dto.CustomerRequestDTO;
import com.nl.optica.dto.CustomerResponseDTO;
import com.nl.optica.models.Customer;
import com.nl.optica.services.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerServiceImpl customerService;

    @GetMapping("{id}")
    public ResponseEntity<CustomerResponseDTO> getCustomerById(@PathVariable Long id){
        Customer customer = customerService.getCustomerById(id);
        return ResponseEntity.ok(CustomerResponseDTO.of(customer));
    }

    @GetMapping
    public ResponseEntity<List<CustomerResponseDTO>> getCustomers(){
        List<Customer> customers = customerService.getAllCustomers();
        List<CustomerResponseDTO> customerResponseDTOList = new ArrayList<>();
        customers.forEach(e -> customerResponseDTOList.add(CustomerResponseDTO.of(e)));
        return ResponseEntity.ok(customerResponseDTOList);
    }

    @PatchMapping("{id}")
    public void updateCustomerById(@PathVariable Long id, @RequestBody CustomerRequestDTO customerDTO){
        customerService.updateCustomer(id, customerDTO);
    }

    @PostMapping
    public ResponseEntity<CustomerResponseDTO> addCustomer(@RequestBody CustomerRequestDTO customerDTO){
        Customer customer = customerService.addCustomer(customerDTO);
        return ResponseEntity.ok(CustomerResponseDTO.of(customer));
    }

    @DeleteMapping("{id}")
    public void deleteCustomerById(@PathVariable Long id){
        customerService.deleteCustomer(id);
    }

}
