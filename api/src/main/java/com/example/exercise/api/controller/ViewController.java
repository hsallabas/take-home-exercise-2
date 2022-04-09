package com.example.exercise.api.controller;

import com.example.exercise.api.model.ServiceSpending;
import com.example.exercise.api.model.View;
import com.example.exercise.api.service.ViewService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/views")
public class ViewController {

  public ViewController(ViewService viewService) {
    this.viewService = viewService;
  }

  private ViewService viewService;

  @GetMapping("")
  public List<View> getViews() {
    return viewService.getViews();
  }

  @PostMapping("")
  public View createView(@RequestBody View newView) {
    return viewService.createView(newView);
  }

  @GetMapping("/{id}")
  public View getView(@PathVariable Long id) {
    return viewService.getView(id);
  }

  @PutMapping("/{id}")
  public View updateView(@PathVariable Long id, @RequestBody View updatedView) {
    return viewService.updateView(id, updatedView);
  }

  @DeleteMapping("/{id}")
  public void deleteView(@PathVariable Long id) {
    viewService.deleteView(id);
  }
}
