package com.example.exercise.api.service;

import com.example.exercise.api.model.ServiceSpending;

import java.util.List;

public interface SpendingService {

  List<ServiceSpending> getServiceSpending();
  List<ServiceSpending> getServiceSpendingView(Long id);
}
