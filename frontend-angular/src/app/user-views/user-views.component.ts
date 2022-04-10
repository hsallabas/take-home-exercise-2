import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserView } from '../app-state/models';

@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.scss']
})
export class UserViewsComponent implements OnInit {
  public userViews$: Observable<Array<UserView>>

  constructor() { }

  ngOnInit() {
  }

}
