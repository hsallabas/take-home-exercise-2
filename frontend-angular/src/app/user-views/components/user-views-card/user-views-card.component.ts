import { Component, Input, OnInit } from '@angular/core';
import { UserView } from 'src/app/app-state/models';

@Component({
  selector: 'app-user-views-card',
  templateUrl: './user-views-card.component.html',
  styleUrls: ['./user-views-card.component.scss']
})
export class UserViewsCardComponent implements OnInit {
  @Input() public userView: UserView;

  constructor() { }

  ngOnInit() {
  }

}
