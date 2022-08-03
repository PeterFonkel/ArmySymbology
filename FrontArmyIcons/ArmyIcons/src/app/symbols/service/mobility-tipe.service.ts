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

}
