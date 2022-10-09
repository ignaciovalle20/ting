import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { FuncionesService } from 'src/app/services/funciones.service';
import { MovieFinderDateSelectorComponent } from '../movie-finder-date-selector/movie-finder-date-selector.component';

@Component({
  selector: 'app-movie-finder-theater-selector',
  templateUrl: './movie-finder-theater-selector.component.html',
  styleUrls: ['./movie-finder-theater-selector.component.scss']
})
export class MovieFinderTheaterSelectorComponent implements OnInit {

  constructor(private funcionesService: FuncionesService) { }
  isDisabled: boolean = true;
  selectedTheater?: any ;
  theaters: string[] = [];
  /* Original
  listaCines = [
    "Life Tres Cruces",
    "Movie Montevideo Shopping",
    "Movie Punta Carretas"
  ]
  */
  @Output() enableDateFormEvent = new EventEmitter<Event>();

  @ViewChild(MovieFinderDateSelectorComponent) dateSelector: MovieFinderDateSelectorComponent | undefined;


  ngOnInit(): void {

  }

  //Obtengo los teathers de la pelicula seleccionada
  getTheater(value: string) {
    console.log("getTheater", value);
    this.funcionesService.getTheaterByMovie(value).subscribe((theaters: string[]) => {
      this.theaters = theaters;
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


