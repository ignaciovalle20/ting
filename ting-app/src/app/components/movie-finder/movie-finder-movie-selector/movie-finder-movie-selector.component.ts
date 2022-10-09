import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-finder-movie-selector',
  templateUrl: './movie-finder-movie-selector.component.html',
  styleUrls: ['./movie-finder-movie-selector.component.scss']
})
export class MovieFinderMovieSelectorComponent implements OnInit {

  @Output() movieSelectedEvent = new EventEmitter<Movie>();

  movies: Movie[] = [];

  movie: Movie | undefined;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      }); 
  }
  

/*   getMovie(){
    let moviee = (<HTMLInputElement>document.getElementById("inputGroupSelectMovie")).value;
    console.log(String(moviee));
    var peli = this.movies.find(obj => {
      return obj.name === moviee
    });
    this.peliculaSeleccionada.emit(peli);
  } */

  getMovie(value: string ){
    console.log("SELECCION" , value);
    this.movieService.getMovieByName(value).subscribe((movie: Movie) => {
      this.movie = movie;
      console.log("MOVI", this.movie.name);
      this.movieSelectedEvent.emit(this.movie);
    });
  }
  
}