package com.example.exercise.api.repository;

import com.example.exercise.api.model.Spending;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SpendingRepository extends CrudRepository<Spending, Long> {

  List<Spending> findByServiceIn(List<String> service);
  List<Spending> findAll();
}
