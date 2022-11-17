import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Extra } from '../interfaces/extra';
import { environment } from 'src/environments/environment';

const EXTRAS_URL = `${environment.baseApiUrl}/api/extras`;

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor(private http: HttpClient) { }

  snack! : Extra;

  snackS : string = "";

  getExtras(): Observable<Extra[]> {
    return this.http.get<any>(EXTRAS_URL);
  }

}