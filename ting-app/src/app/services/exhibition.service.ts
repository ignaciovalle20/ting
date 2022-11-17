import { Injectable } from '@angular/core';
import { Observable, map, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Exhibition } from '../interfaces/exhibition';
import { environment } from 'src/environments/environment';


const EXHIBITIONS_URL = `${environment.baseApiUrl}/api/exhibitions`;

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  constructor(private http: HttpClient) { }

  getFuncion(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(EXHIBITIONS_URL);
  }


  getTheaterByMovie(movie: string): Observable<string[]> {
    return this.http.get<string[]>(EXHIBITIONS_URL+"/gettheaters/"+movie);
  }

  getSchedule(movie: string, theater: string, date: string): Observable<any[]> {
    return this.http.get<any[]>(EXHIBITIONS_URL+"/getschedule/"+movie+"/"+theater+"/"+date);
  }

  buildRoom(id: string) : Observable<any[]> {
    return this.http.get<any[]>(EXHIBITIONS_URL+"/room/"+id);
  }
 
}

