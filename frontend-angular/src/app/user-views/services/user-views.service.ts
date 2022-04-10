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

  public createView(data: UserView): Observable<Array<UserView>> {
    return this.userViewsApiService.createView(data);
  }

  public updateView(data: UserView): Observable<Array<UserView>> {
    return this.userViewsApiService.updateView(data);
  }

  public deleteView(viewId: number): Observable<Array<UserView>> {
    return this.userViewsApiService.deleteView(viewId);
  }
}
