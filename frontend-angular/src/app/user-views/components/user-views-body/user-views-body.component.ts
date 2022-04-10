import { Component, Input, OnInit } from '@angular/core';
import { UserView } from 'src/app/app-state/models';

@Component({
  selector: 'app-user-views-body',
  templateUrl: './user-views-body.component.html',
  styleUrls: ['./user-views-body.component.scss']
})
export class UserViewsBodyComponent implements OnInit {
  @Input() public userViews: Array<UserView>;

  constructor() { }

  ngOnInit() {
    this.userViews = [
      {
        "id": 1,
        "name": "Test View-1",
        "services": [
          "FINANCE CONTROL",
          "PUBLIC HEALTH"
        ]
      },
      {
        "id": 2,
        "name": "Test View-2",
        "services": [
          "FINANCE CONTROL",
          "PUBLIC HEALTH"
        ]
      },
      {
        "id": 3,
        "name": "Test View-3",
        "services": [
          "FINANCE CONTROL",
          "PUBLIC HEALTH"
        ]
      },
      {
        "id": 4,
        "name": "Test View-4",
        "services": [
          "FINANCE CONTROL",
          "PUBLIC HEALTH"
        ]
      },
      {
        "id": 5,
        "name": "Test View-5",
        "services": [
          "FINANCE CONTROL",
          "PUBLIC HEALTH"
        ]
      },
      {
        "id": 6,
        "name": "Test View-6",
        "services": [
          "FINANCE CONTROL",
          "PUBLIC HEALTH"
        ]
      }
    ]
  }

}
