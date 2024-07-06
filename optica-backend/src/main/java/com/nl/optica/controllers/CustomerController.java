package com.nl.optica.controllers;

import com.nl.optica.dto.CustomerRequestDTO;
import com.nl.optica.dto.CustomerResponseDTO;
import com.nl.optica.models.Customer;
import com.nl.optica.services.CustomerServiceImpl;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    private final CustomerServiceImpl customerService;

    public CustomerController(CustomerServiceImpl customerService){
        this.customerService = customerService;
    }

    @GetMapping("{id}")
    public ResponseEntity<CustomerResponseDTO> getCustomerById(@PathVariable Long id){
        Customer customer = customerService.getCustomerById(id);
        return ResponseEntity.ok(CustomerResponseDTO.of(customer));
    }

    @GetMapping
    public ResponseEntity<List<CustomerResponseDTO>> getCustomers(@RequestParam Map<String, String> params, HttpServletResponse response){
        Page<Customer> customers = customerService.getAllCustomers(params);
        List<CustomerResponseDTO> customerResponseDTOList = new ArrayList<>();
        customers.forEach(e -> customerResponseDTOList.add(CustomerResponseDTO.of(e)));
        response.addHeader("x-total-count", String.valueOf(customers.getTotalElements()));
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
