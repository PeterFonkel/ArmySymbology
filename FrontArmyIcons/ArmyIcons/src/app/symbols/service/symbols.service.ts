import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Symbol } from '../models/symbol';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  endpoint: string = environment.urlAPI + "/units";

  constructor(private http : HttpClient) { }

  getSymbols(): Observable<Symbol[]> {
    return this.http.get<any>(this.endpoint).pipe(map(response=>response._embedded.units));
  }

  getIdSymbol(p: any): string {
    let url = p._links.self.href;
    let parts = url.split("/");
    return parts[parts.length - 1];
  }

  mapearSymbol(symbol: any): string {
   return this.getIdSymbol(symbol);
  }

  postSymbol(symbol: Symbol): Observable<Symbol> {
    return this.http.post<Symbol>(this.endpoint, symbol);
  }

  deleteSymbol(id: number): Observable<any> {
   return this.http.delete(this.endpoint + "/" + id);
  }
  patchSymbol(symbol: any): Observable<any> {
    return this.http.patch(this.endpoint + "/" + symbol.id, symbol);
  }

}
