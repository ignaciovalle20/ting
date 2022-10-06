import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private movieUrl = 'api/movies';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }
 /*  getArrayOfImgs(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.imgsUrl);
  } */
  /* 
  getArrayOfSearchedImgs(value: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.imgsUrl + `?tags=${value}`);
  } */
}