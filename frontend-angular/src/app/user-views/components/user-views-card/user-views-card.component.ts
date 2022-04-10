import { Component, Input, OnInit } from '@angular/core';
import { ServiceSpend, UserView } from 'src/app/app-state/models';

@Component({
  selector: 'app-user-views-card',
  templateUrl: './user-views-card.component.html',
  styleUrls: ['./user-views-card.component.scss']
})
export class UserViewsCardComponent implements OnInit {
  @Input() public userView: UserView;
  @Input() public services: Array<ServiceSpend>;
  public availableService: Array<ServiceSpend>;

  constructor() { }

  ngOnInit() {
    this.getAvailableService();
  }

  getAvailableService() {
    this.availableService = this.services.filter((serviceItem) => !this.userView.services.includes(serviceItem.service))
  }

  getSpendingService(serviceName) {
    return this.services.find((serviceItem) => serviceItem.service === serviceName);
  }

}
