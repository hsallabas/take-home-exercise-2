import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardBodyComponent } from "./components/dashboard-body/dashboard-body.component";
import { DashboardCardComponent } from "./components/dashboard-card/dashboard-card.component";
import { DashboardHeaderComponent } from "./components/dashboard-header/dashboard-header.component";
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
