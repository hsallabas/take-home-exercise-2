import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewsComponent } from './user-views.component';
import { SharedModule } from '../shared/shared.module';
import { UserViewsRoutingModule } from './user-views-routing.module';
import { UserViewsHeaderComponent } from './components/user-views-header/user-views-header.component';
import { UserViewsBodyComponent } from './components/user-views-body/user-views-body.component';
import { UserViewsCardComponent } from './components/user-views-card/user-views-card.component';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserViewsComponent, UserViewsHeaderComponent, UserViewsBodyComponent, UserViewsCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    UserViewsRoutingModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class UserViewsModule { }
