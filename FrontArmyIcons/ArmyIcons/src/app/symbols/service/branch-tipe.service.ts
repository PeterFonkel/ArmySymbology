import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BranchType } from '../models/branchType';

@Injectable({
  providedIn: 'root'
})
export class BranchTipeService {

  endpoint: string = environment.urlAPI + "/branchTypes";

  constructor(private http : HttpClient) { }

  getBranchTypes(): Observable<BranchType[]>{
    return this.http.get<any>(this.endpoint).pipe(map(response=>response._embedded.branchTypes))
  }

}
