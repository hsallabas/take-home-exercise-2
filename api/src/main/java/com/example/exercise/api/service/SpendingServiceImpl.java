package com.example.exercise.api.service;

import com.example.exercise.api.model.ServiceSpending;
import com.example.exercise.api.model.Spending;
import com.example.exercise.api.model.View;
import com.example.exercise.api.repository.SpendingRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SpendingServiceImpl implements SpendingService {

  private final SpendingRepository repository;
  private final ViewService viewService;

  public SpendingServiceImpl(SpendingRepository repository, ViewService viewService) {
    this.repository = repository;
    this.viewService = viewService;
  }

  @Override
  public List<ServiceSpending> getServiceSpending() {
    return aggregateSpendByService(this.repository.findAll());
  }

  @Override
  public List<ServiceSpending> getServiceSpendingView(Long id) {
    List<String> viewServices = this.viewService.getView(id).getServices();
    List<Spending> viewSpending = repository.findByServiceIn(viewServices);
    return aggregateSpendByService(viewSpending);
  }

  private List<ServiceSpending> aggregateSpendByService(List<Spending> spending) {
    return spending.stream()
            .collect(Collectors.groupingBy(Spending::getService,
                    Collectors.summingDouble(Spending::getNetAmount)))
            .entrySet()
            .stream().map(a -> new ServiceSpending(a.getKey(), a.getValue()))
            .collect(Collectors.toList());
  }
}
