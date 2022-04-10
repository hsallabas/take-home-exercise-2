import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewsCardComponent } from './user-views-card.component';

describe('UserViewsCardComponent', () => {
  let component: UserViewsCardComponent;
  let fixture: ComponentFixture<UserViewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
