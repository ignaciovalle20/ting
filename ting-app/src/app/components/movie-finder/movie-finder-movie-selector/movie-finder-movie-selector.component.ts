import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-finder-movie-selector',
  templateUrl: './movie-finder-movie-selector.component.html',
  styleUrls: ['./movie-finder-movie-selector.component.scss']
})
export class MovieFinderMovieSelectorComponent implements OnInit {

  @Output() peliculaSeleccionada = new EventEmitter<string>();

  peliculas = [
    "Sachin Tendulkar",
    "Ricky Ponting",
    "Virat Kohli",
    "Kumar Sangakkara",
    "Jacques Kallis",
    "Hashim Amla",
    "Mahela Jayawardene",
    "Brian Lara",
    "Rahul Dravid",
    "AB de Villiers"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getMovie(){
    var movie = (<HTMLInputElement>document.getElementById("inputGroupSelectMovie")).value;
    this.peliculaSeleccionada.emit(movie);
  }
}
