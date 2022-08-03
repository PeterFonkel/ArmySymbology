import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SizeType } from '../models/sizeType';

@Injectable({
  providedIn: 'root'
})
export class SizeTipeService {

  endpoint: string = environment.urlAPI + "/sizeTypes";

  constructor(private http : HttpClient) { }

  getSizeTypes(): Observable<SizeType[]>{
    return this.http.get<any>(this.endpoint).pipe(map(response=>response._embedded.sizeTypes))
  }

}
