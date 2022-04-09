import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardBodyComponent } from "./dashboard-body/dashboard-body.component";
import { DashboardCardComponent } from "./dashboard-card/dashboard-card.component";
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { FlexModule } from "@angular/flex-layout";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [DashboardComponent, DashboardBodyComponent, DashboardCardComponent, DashboardHeaderComponent],
  imports: [CommonModule, FlexModule, DashboardRoutingModule, SharedModule],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
