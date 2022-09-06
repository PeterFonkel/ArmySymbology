import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BranchType } from '../models/branchType';
import { MobilityType } from '../models/mobilityType';

@Injectable({
  providedIn: 'root'
})
export class MobilityTipeService {

  endpoint: string = environment.urlAPI + "/mobilityTypes";

  constructor(private http : HttpClient) { }

  getMobilityTypes(): Observable<MobilityType[]>{
    return this.http.get<any>(this.endpoint).pipe(map(response=>response._embedded.mobilityTypes))
  }
  deleteMobility(id: string): Observable<void> {
    return this.http.delete<any>(this.endpoint + "/" + id);
  }
  
  getIdType(p: any): string {
    let url = p._links.self.href;
    let parts = url.split("/");
    return parts[parts.length - 1];
  }

  mapearType(type: any): string {
   return this.getIdType(type);
  }
  postType(mobility: MobilityType): Observable<MobilityType>{
    return this.http.post<any>(this.endpoint, mobility);
  }
}
