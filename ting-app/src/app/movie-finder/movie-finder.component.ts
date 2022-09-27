import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})
export class MovieFinderComponent implements OnInit {

  selectedMovie : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getTheater(movie : string){
    this.selectedMovie = movie;
  }
}
