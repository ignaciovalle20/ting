import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  peliculas = [
    {"nombre" : "Batman", "horario" : "14:55"},
    {"nombre" : "Batman", "horario" : "17:55"},
    {"nombre" : "Batman", "horario" : "22:55"},
    {"nombre" : "Batman", "horario" : "23:55"}
  ]

  ngOnInit(): void {
  }

}
