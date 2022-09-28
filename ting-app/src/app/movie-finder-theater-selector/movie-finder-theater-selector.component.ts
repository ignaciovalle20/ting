import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-finder-theater-selector',
  templateUrl: './movie-finder-theater-selector.component.html',
  styleUrls: ['./movie-finder-theater-selector.component.scss']
})
export class MovieFinderTheaterSelectorComponent implements OnInit {

  @Input() pelicula = "";

  listaCines = [
    "cine 1",
  ]
  constructor() { }

  ngOnInit(): void {
    if (this.pelicula) {
      console.log(this.pelicula);
    }
  }


}
