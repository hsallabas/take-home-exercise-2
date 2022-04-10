import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewsBodyComponent } from './user-views-body.component';

describe('UserViewsBodyComponent', () => {
  let component: UserViewsBodyComponent;
  let fixture: ComponentFixture<UserViewsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
