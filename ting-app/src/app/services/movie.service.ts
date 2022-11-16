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

  //private movieUrl = 'api/movies';

  movie?: Movie ;

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(MOVIE_URL);
  }
  getMovieNames(): Observable<any[]> {
    return this.http.get<any[]>(MOVIELIST_URL);
  }


  getMoviesList(): Observable<string[]> {
    return this.http.get<string[]>(MOVIELIST_URL);
  }

  getMovieByName(name: string): Observable<any> {
    return this.http.get<Movie[]>(MOVIE_URL)
      .pipe(map((movies: Movie[]) => {
        movies.filter((movie) => {
          if (movie.name === name) {
            this.movie = movie;
          }
        });
        return this.movie;
      })); 
  }

  getMovieImageWide(name: string): Observable<any> {
    return this.http.get<Movie[]>(MOVIE_URL)
      .pipe(map((movies: Movie[]) => {
        movies.filter((movie) => {
          if (movie.name === name) {
            this.movie = movie;
          }
        });
        return this.movie?.postImg.urlWide;
      }));
  }
  getMovieImageMobile(name: string): Observable<any> {
    return this.http.get<Movie[]>(MOVIE_URL)
      .pipe(map((movies: Movie[]) => {
        movies.filter((movie) => {
          if (movie.name === name) {
            this.movie = movie;
          }
        });
        return this.movie?.postImg.url;
      }));
  }

 /*  getArrayOfImgs(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.imgsUrl);
  } */
  /* 
  getArrayOfSearchedImgs(value: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.imgsUrl + `?tags=${value}`);
  } */
}
