import { Injectable } from '@angular/core';
import { Observable, map, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Exhibition } from '../interfaces/exhibition';
import { environment } from 'src/environments/environment';
import { Seats } from '../interfaces/seats';


const EXHIBITIONS_URL = `${environment.baseApiUrl}/api/exhibitions`;

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  constructor(private http: HttpClient) { }

  getFuncion(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(EXHIBITIONS_URL);
  }

  putSeats(exhibition : string,seats: Seats[]) : Observable<any[]> {
    const body = {seatsunavailable: seats};
    return this.http.put<any[]>(EXHIBITIONS_URL+"/seats/"+exhibition, body);
  }


  getTheaterByMovie(movie: string): Observable<string[]> {
    return this.http.get<string[]>(EXHIBITIONS_URL+"/theaters/"+movie);
  }

  getSchedule(movie: string, theater: string, date: string): Observable<any[]> {
    return this.http.get<any[]>(EXHIBITIONS_URL+"/schedule/"+movie+"/"+theater+"/"+date);
  }

  buildRoom(id: string) : Observable<any[]> {
    return this.http.get<any[]>(EXHIBITIONS_URL+"/room/"+id);
  }
 
}

