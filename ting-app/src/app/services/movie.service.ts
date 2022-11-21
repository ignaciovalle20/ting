import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

const MOVIE_URL = `${environment.baseApiUrl}/api/movies`;
const MOVIELIST_URL = `${environment.baseApiUrl}/api/movieslist`;


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(MOVIE_URL);
  }

  getMoviesList(): Observable<string[]> {
    return this.http.get<string[]>(MOVIELIST_URL);
  }

  getMovieImageWide(name: string): Observable<any> {
    return this.http.get<any>(MOVIE_URL+"/imgwide/"+name)
  }
  
  getMovieImageMobile(name: string): Observable<any> {
    return this.http.get<any>(MOVIE_URL+"/img/"+name)
  }
}
