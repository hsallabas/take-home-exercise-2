package com.example.exercise.api.service;

import com.example.exercise.api.model.View;

import java.util.List;

public interface ViewService {

  List<View> getViews();
  View createView(View view);
  View getView(Long id);
  View updateView(Long id, View updatedView);
  void deleteView(Long id);

}
