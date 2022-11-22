import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ExhibitionService } from 'src/app/services/exhibition.service';
import { MovieFinderDateSelectorComponent } from '../movie-finder-date-selector/movie-finder-date-selector.component';

@Component({
  selector: 'app-movie-finder-theater-selector',
  templateUrl: './movie-finder-theater-selector.component.html',
  styleUrls: ['./movie-finder-theater-selector.component.scss']
})
export class MovieFinderTheaterSelectorComponent implements OnInit {

  constructor(private exhibitionService: ExhibitionService) { }
  isDisabled: boolean = true;
  selectedTheater?: any ;
  theaters: string[] = [];

  @Output() enableDateFormEvent = new EventEmitter<Event>();

  @ViewChild(MovieFinderDateSelectorComponent) dateSelector: MovieFinderDateSelectorComponent | undefined;

  ngOnInit(): void {}

  //Obtengo los teathers de la pelicula seleccionada
  getTheater(value: string) {
    this.exhibitionService.getTheaterByMovie(value).subscribe(theater => {
      this.theaters = theater;
    });
    this.isDisabled = false;
  }
  //Emitimos el evento para habilitar el formulario de fecha
  enableDateForm() {
    this.enableDateFormEvent.emit();
  }

  selectedTheaterFunction() {
    return this.selectedTheater;
  }
}


