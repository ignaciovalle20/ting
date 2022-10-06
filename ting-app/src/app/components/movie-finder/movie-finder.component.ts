import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieFinderMovieSelectorComponent } from './movie-finder-movie-selector/movie-finder-movie-selector.component';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})
export class MovieFinderComponent implements OnInit {

  peliculaSelec : Movie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getTheater(){
    console.log("hola");
  }

  getPelicula(movie : Movie){
    this.peliculaSelec = movie;
    /*console.log(movie.name); */
  }
}
