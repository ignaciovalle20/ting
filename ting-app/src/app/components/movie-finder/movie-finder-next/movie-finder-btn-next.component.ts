import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-finder-btn-next',
  templateUrl: './movie-finder-btn-next.component.html',
  styleUrls: ['./movie-finder-btn-next.component.scss']
})
export class MovieFinderNextComponent implements OnInit {

  @Output() SearchMovieFunctionsEvent = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  searchMovieFunctions(event: MouseEvent) {
    this.SearchMovieFunctionsEvent.emit(event);
  }

}
