import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { MovieFinderMovieSelectorComponent } from './movie-finder-movie-selector/movie-finder-movie-selector.component';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})
export class MovieFinderComponent implements OnInit {

  peliculaSelec:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getTheater(){
    console.log("hola");
  }

  getPelicula(movie : string){
    this.peliculaSelec = movie;
    console.log(movie);
  }
}
