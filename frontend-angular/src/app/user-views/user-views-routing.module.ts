import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewsComponent } from './user-views.component';


const routes: Routes = [
  {
    path: '',
    component: UserViewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewsRoutingModule { }
