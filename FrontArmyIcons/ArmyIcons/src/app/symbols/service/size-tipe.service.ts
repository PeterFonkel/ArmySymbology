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

  deleteSize(id: string): Observable<void> {
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
  postType(size: SizeType): Observable<SizeType>{
    return this.http.post<any>(this.endpoint, size);
  }


}
