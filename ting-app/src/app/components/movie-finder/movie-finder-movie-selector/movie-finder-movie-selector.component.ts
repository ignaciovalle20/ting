import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-finder-movie-selector',
  templateUrl: './movie-finder-movie-selector.component.html',
  styleUrls: ['./movie-finder-movie-selector.component.scss']
})
export class MovieFinderMovieSelectorComponent implements OnInit {

  @Output() peliculaSeleccionada = new EventEmitter<string>();

  movies: Movie[] = [];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      }); 
  }
  

  getMovie(){
    var movie = (<HTMLInputElement>document.getElementById("inputGroupSelectMovie")).value;
    this.peliculaSeleccionada.emit(movie);
  }

  
}