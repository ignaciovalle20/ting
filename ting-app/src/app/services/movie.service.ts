import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private movieUrl = 'api/movies';

  movie?: Movie ;

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }

  getMovieByName(name: String): Observable<any> {
    return this.http.get<Movie[]>(this.movieUrl)
      .pipe(map((movies: Movie[]) => {
        movies.filter((movie) => {
          if (movie.name === name) {
            this.movie = movie;
          }
        });
        return this.movie;
      })); 
  }

  getMovieImageWide(name: String): Observable<any> {
    return this.http.get<Movie[]>(this.movieUrl)
      .pipe(map((movies: Movie[]) => {
        movies.filter((movie) => {
          if (movie.name === name) {
            this.movie = movie;
          }
        });
        return this.movie?.postImg.urlWide;
      }));
  }
  getMovieImageMobile(name: String): Observable<any> {
    return this.http.get<Movie[]>(this.movieUrl)
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
