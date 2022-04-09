package com.example.exercise.api;

public class NotFoundException extends RuntimeException {
  public NotFoundException(Long message) {
    super(String.format("View not found {}", message));
  }
}
