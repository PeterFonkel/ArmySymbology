import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SpecialType } from '../models/specialType';

@Injectable({
  providedIn: 'root'
})
export class SpecialTipeService {

  endpoint: string = environment.urlAPI + "/specialTypes";

  constructor(private http : HttpClient) { }

  getSpecialTypes(): Observable<SpecialType[]>{
    return this.http.get<any>(this.endpoint).pipe(map(response=>response._embedded.specialTypes))
  }

}
