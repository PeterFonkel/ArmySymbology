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

  deleteBranch(id: string): Observable<void> {
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
  postType(branch: BranchType): Observable<BranchType>{
    return this.http.post<any>(this.endpoint, branch);
  }

}
