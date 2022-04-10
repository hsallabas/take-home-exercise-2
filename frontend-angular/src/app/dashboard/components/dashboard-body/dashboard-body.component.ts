import { Component, Input } from "@angular/core";
import { ServiceSpend } from "../../../app-state/models";

@Component({
  selector: "app-dashboard-body",
  templateUrl: "./dashboard-body.component.html",
  styleUrls: ["./dashboard-body.component.scss"]
})
export class DashboardBodyComponent {
  @Input() public services: Array<ServiceSpend>;
}
