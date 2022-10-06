import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-finder-movie-selector',
  templateUrl: './movie-finder-movie-selector.component.html',
  styleUrls: ['./movie-finder-movie-selector.component.scss']
})
export class MovieFinderMovieSelectorComponent implements OnInit {
String(arg0: string) {
throw new Error('Method not implemented.');
}

  @Output() peliculaSeleccionada = new EventEmitter<Movie>();

  movies: Movie[] = [];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      }); 
  }
  

  getMovie(){
    let moviee = (<HTMLInputElement>document.getElementById("inputGroupSelectMovie")).value;
    console.log(String(moviee));
    var peli = this.movies.find(obj => {
      return obj.name === moviee
    });
    this.peliculaSeleccionada.emit(peli);
  }

  
}