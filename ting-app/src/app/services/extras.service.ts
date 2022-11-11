import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Extra } from '../interfaces/extra';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor(private http: HttpClient) { }

  private extrasUrl = 'api/extras';

  snack! : Extra;

  snackS : string = "";

  getExtras(): Observable<Extra[]> {
    return this.http.get<Extra[]>(this.extrasUrl);
  }

}