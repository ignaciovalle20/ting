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
    this.movieService.getMoviesList().subscribe((movies: string[]) => {
      this.movienames = movies;
    });
  }

  getMovie(movie: string) {
    this.movieSelectedEvent.emit(movie);
  }

}