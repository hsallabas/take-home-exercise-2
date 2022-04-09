package com.example.exercise.api.controller;

import com.example.exercise.api.model.ServiceSpending;
import com.example.exercise.api.service.SpendingService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/spending")
public class SpendingController {

  private final SpendingService spendingService;

  public SpendingController(SpendingService spendingService) {
    this.spendingService = spendingService;
  }

  @GetMapping("/service")
  public List<ServiceSpending> getServiceSpending() {
    return spendingService.getServiceSpending();
  }

  @GetMapping("/service/view/{id}")
  public List<ServiceSpending> getServiceSpendingView(@PathVariable Long id) {
    return spendingService.getServiceSpendingView(id);
  }
}
