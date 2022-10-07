import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Extra } from '../interfaces/extras';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor(private http: HttpClient) { }

  private extrasUrl = 'api/extras';

  getExtras(): Observable<Extra[]> {
    return this.http.get<Extra[]>(this.extrasUrl);
  }
}