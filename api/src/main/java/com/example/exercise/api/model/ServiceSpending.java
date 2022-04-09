package com.example.exercise.api.model;

public class ServiceSpending {
  private final String service;
  private final double spending;
  public ServiceSpending(String service, double spending) {
    this.service = service;
    this.spending = spending;
  }

  public String getService() {
    return service;
  }

  public double getSpending() {
    return spending;
  }

}