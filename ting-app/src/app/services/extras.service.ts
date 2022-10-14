import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Extra } from '../interfaces/extras';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor(private http: HttpClient) { }

  private extrasUrl = 'api/extras';

  snack! : Extra;

  snackS : String = "";

  getExtras(): Observable<Extra[]> {
    return this.http.get<Extra[]>(this.extrasUrl);
  }

  getExtrasSummary(id: String): Observable<any> {
      let idEx = id.slice(0,1);
      let cantEx = id.slice(2,3);
      return this.http.get<Extra[]>(this.extrasUrl).pipe(map((Extras: Extra[]) => {
        Extras.filter((Extra) => {
          if (Extra.id === idEx) {
            this.snack = Extra;
          }
        });
        return this.snack;
      }));
  }

}