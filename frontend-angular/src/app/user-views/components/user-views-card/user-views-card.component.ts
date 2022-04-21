import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ServiceSpend, UserView } from 'src/app/app-state/models';
import * as UserViewsActions from '../../../app-state/actions/user-views.actions';
import { UserViewsService } from '../../services/user-views.service';

@Component({
  selector: 'app-user-views-card',
  templateUrl: './user-views-card.component.html',
  styleUrls: ['./user-views-card.component.scss']
})
export class UserViewsCardComponent implements OnInit {
  @Input() public userView: UserView;
  @Input() public services: Array<ServiceSpend>;
  public availableService: Array<ServiceSpend>;
  public viewForm: FormGroup;
  public edit: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private readonly store: Store,
    private userViewsService: UserViewsService
  ) { }

  ngOnInit() {
    this.viewForm = this.formBuilder.group({
      id: [this.userView.id],
      name: [this.userView.name],
      services: [[...this.userView.services]]
    });
    this.getAvailableService()
  }

  getAvailableService() {
    this.availableService = this.services.filter((serviceItem) => !this.viewForm.value.services.includes(serviceItem.service))
  }

  getSpendingService(serviceName) {
    return this.services.find((serviceItem) => serviceItem.service === serviceName);
  }

  editView() {
    this.edit = true;
  }

  cancel() {
    if (this.viewForm.value.id) {
      this.edit = false;
      this.viewForm.patchValue(this.userView);
      return;
    }
    this.store.dispatch({ type: UserViewsActions.CANCEL_CREATE_VIEW });
  }

  selectService(event) {
    this.viewForm.patchValue({services: [...this.viewForm.value.services, event.value]});
    this.getAvailableService();
  }

  deleteService(index) {
    this.viewForm.value.services.splice(index, 1); 
  }

  saveView() {
    if (this.viewForm.value.id) {
      this.userViewsService.updateView(this.viewForm.value).toPromise().then((res) => {
        this.store.dispatch({ type: UserViewsActions.UPDATE_VIEW, payload: res });
      });
      return;
    }

    this.userViewsService.createView(this.viewForm.value).toPromise().then((res) => {
      this.store.dispatch({ type: UserViewsActions.CREATE_VIEW, payload: res });
    });
  }

  deleteView() {
    this.userViewsService.deleteView(this.userView.id).toPromise().then((res) => {
      this.store.dispatch({ type: UserViewsActions.DELETE_VIEW, payload: {id: this.userView.id} });
    });
  }

  upService(index) {
    let tempArray = [...this.viewForm.value.services];
    const item = tempArray[index];
    tempArray[index] = tempArray[index - 1];
    tempArray[index - 1] = item;
    this.viewForm.patchValue({services: tempArray});
  }

  downService(index) {
    let tempArray = [...this.viewForm.value.services];
    const item = tempArray[index];
    tempArray[index] = tempArray[index + 1];
    tempArray[index + 1] = item;
    this.viewForm.patchValue({services: tempArray});
  }

}
