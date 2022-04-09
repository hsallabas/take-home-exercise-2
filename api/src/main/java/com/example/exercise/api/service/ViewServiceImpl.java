package com.example.exercise.api.service;

import com.example.exercise.api.NotFoundException;
import com.example.exercise.api.model.View;
import com.example.exercise.api.repository.ViewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViewServiceImpl implements ViewService {

  public ViewServiceImpl(ViewRepository viewRepository) {
    this.viewRepository = viewRepository;
  }

  private ViewRepository viewRepository;

  @Override
  public List<View> getViews() {
    return viewRepository.findAll();
  }

  @Override
  public View createView(View newView) {
    return viewRepository.save(newView);
  }

  @Override
  public View getView(Long id) {
    return viewRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
  }

  @Override
  public View updateView(Long id, View updatedView) {
    View view = viewRepository.findById(id).orElseThrow(() -> new NotFoundException(id));

    view.setName(updatedView.getName());
    view.setServices(updatedView.getServices());

    return viewRepository.save(view);
  }

  @Override
  public void deleteView(Long id) {
    viewRepository.deleteById(id);
  }
}
