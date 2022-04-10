import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserView } from "src/app/app-state/models";
import { UserViewsApiService } from "./user-views-api.service";

@Injectable({
  providedIn: "root"
})
export class UserViewsService {
  getSpendingByService() {
    throw new Error("Method not implemented.");
  }
  constructor(protected userViewsApiService: UserViewsApiService) {}

  public getUserViews(): Observable<Array<UserView>> {
    return this.userViewsApiService.get();
  }
}
