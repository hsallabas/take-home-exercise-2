import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewsHeaderComponent } from './user-views-header.component';

describe('UserViewsHeaderComponent', () => {
  let component: UserViewsHeaderComponent;
  let fixture: ComponentFixture<UserViewsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
