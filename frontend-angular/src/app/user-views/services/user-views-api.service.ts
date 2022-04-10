import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UserView } from "src/app/app-state/models";

@Injectable({
  providedIn: "root"
})
export class UserViewsApiService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<Array<UserView>> {
    return this.http.get<Array<UserView>>(`${environment.apiURL}/views`);
  }
}
