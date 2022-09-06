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
    return this.http.get<any>(this.endpoint + "?size=40").pipe(map(response=>response._embedded.specialTypes))
  }

  deleteSpecial(id: string): Observable<void> {
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
  postType(special: SpecialType): Observable<SpecialType>{
    return this.http.post<any>(this.endpoint, special);
  }
}
