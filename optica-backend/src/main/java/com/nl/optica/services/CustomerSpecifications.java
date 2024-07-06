package com.nl.optica.services;

import com.nl.optica.models.Customer;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CustomerSpecifications {

    public static Specification<Customer> getSpecification(Map<String, String> params) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            params.forEach((k, v) -> {
                if (!k.equals("_start") && !k.equals("_end")) {
                    predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get(k)), "%" + v.toLowerCase().trim() + "%"));
                }
            });

            query.orderBy(
                    criteriaBuilder.asc(root.get("lastName")),
                    criteriaBuilder.asc(root.get("name")),
                    criteriaBuilder.desc(root.get("date"))
            );
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
