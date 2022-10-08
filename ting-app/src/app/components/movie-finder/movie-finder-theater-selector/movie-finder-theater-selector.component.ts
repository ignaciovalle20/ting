import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-finder-theater-selector',
  templateUrl: './movie-finder-theater-selector.component.html',
  styleUrls: ['./movie-finder-theater-selector.component.scss']
})
export class MovieFinderTheaterSelectorComponent implements OnInit {

  @Input() pelicula: Movie | undefined;

  /* Original
  listaCines = [
    "Life Tres Cruces",
    "Movie Montevideo Shopping",
    "Movie Punta Carretas"
  ]
  */


  constructor() { }

  ngOnInit(): void {
    if (this.pelicula) {
      console.log(this.pelicula.name);
    }
  }


}
