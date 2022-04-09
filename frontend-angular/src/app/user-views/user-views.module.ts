import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewsComponent } from './user-views.component';
import { SharedModule } from '../shared/shared.module';
import { UserViewsRoutingModule } from './user-views-routing.module';



@NgModule({
  declarations: [UserViewsComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserViewsRoutingModule
  ]
})
export class UserViewsModule { }
