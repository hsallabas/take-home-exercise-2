import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceSpend } from "../../app-state/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ServiceSpendingApiService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<Array<ServiceSpend>> {
    return this.http.get<Array<ServiceSpend>>(`${environment.apiURL}/spending/service`);
  }
}
