import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-finder-movie-selector',
  templateUrl: './movie-finder-movie-selector.component.html',
  styleUrls: ['./movie-finder-movie-selector.component.scss']
})
export class MovieFinderMovieSelectorComponent implements OnInit {

  @Output() movieSelectedEvent = new EventEmitter<string>();

  movienames: string[] = [];
  movie: Movie | undefined;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    /*     this.movieService.getMovies()
          .subscribe(movies => {
            this.movies = movies;
            console.log("this.movies", this.movies);
          });
     */
    this.movieService.getMovieNames().subscribe((movies: string[]) => {
      this.movienames = movies;
      //console.log("MOVIES", this.movienames);
    });
  }

  getMovie(value: string) {
    console.log("SELECCION", value);
    this.movieSelectedEvent.emit(value);
  }

}