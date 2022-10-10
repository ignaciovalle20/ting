import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieFinderDateSelectorComponent } from './movie-finder-date-selector/movie-finder-date-selector.component';
import { MovieFinderTheaterSelectorComponent } from './movie-finder-theater-selector/movie-finder-theater-selector.component';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})
export class MovieFinderComponent implements OnInit {

  selectedMovie: string | undefined;
  selectedTheater: string | undefined;
  selectedDate: string | undefined;
  
  schedNotFound: boolean = false;

  constructor(private funcionesService : FuncionesService, private route: Router) { }

  ngOnInit(): void {
  }


  @ViewChild(MovieFinderTheaterSelectorComponent) theaterSelector: MovieFinderTheaterSelectorComponent | undefined;
  @ViewChild(MovieFinderDateSelectorComponent) dateSelector: MovieFinderDateSelectorComponent | undefined;

  getPelicula(movie: Movie) {
    console.log("getPelicula", movie.name);
    this.selectedMovie = movie.name;
    this.theaterSelector?.getTheater(movie.name);
  }

  enableDateForm() {
    this.dateSelector?.showDate();
  }

  getMovieSchedule() {
    this.selectedDate = this.dateSelector?.selectedDateFunction();
    this.selectedTheater = this.theaterSelector?.selectedTheaterFunction();
    this.funcionesService.getSchedule(this.selectedMovie!, this.selectedTheater!, this.selectedDate!).subscribe((schedule: any) => {
      if (schedule.length > 0) {
        console.log("schedule", schedule);
        this.schedNotFound = false;
        this.route.navigate(['/moviescheduler'], { queryParams: { movie: this.selectedMovie, theater: this.selectedTheater, date: this.selectedDate } });
      } else {
        this.schedNotFound = true;
        console.log("No hay funciones para la pelicula seleccionada");
      }
    });
  
    console.log("getMovieSchedule", this.selectedMovie);
    console.log("getMovieSchedule", this.theaterSelector?.selectedTheaterFunction());
    console.log("getMovieSchedule", this.dateSelector?.selectedDateFunction());

  }
}
