import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AffiliationType } from '../models/affiliationType';

@Injectable({
  providedIn: 'root'
})
export class AffiliationTipeService {

  endpoint: string = environment.urlAPI + "/affiliationTypes";

  constructor(private http : HttpClient) { }

  getAffiliationTypes(): Observable<AffiliationType[]>{
    return this.http.get<any>(this.endpoint).pipe(map(response=>response._embedded.affiliationTypes))
  }

}
