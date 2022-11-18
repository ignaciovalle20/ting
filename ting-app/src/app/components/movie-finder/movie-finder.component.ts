import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieFinderDateSelectorComponent } from './movie-finder-date-selector/movie-finder-date-selector.component';
import { MovieFinderTheaterSelectorComponent } from './movie-finder-theater-selector/movie-finder-theater-selector.component';
import { ExhibitionService } from 'src/app/services/exhibition.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})
export class MovieFinderComponent implements OnInit {

  selectedMovie: string = "";
  selectedTheater: string = "";
  selectedDate?: string = "";
  
  schedNotFound: boolean = false;

  constructor(private exhibitionService : ExhibitionService, private route: Router, private cart: CartService) { }

  ngOnInit(): void {
  }


  @ViewChild(MovieFinderTheaterSelectorComponent) theaterSelector: MovieFinderTheaterSelectorComponent | undefined;
  @ViewChild(MovieFinderDateSelectorComponent) dateSelector: MovieFinderDateSelectorComponent | undefined;

  getPelicula(movie: string) {
    this.selectedMovie = movie;
    this.theaterSelector?.getTheater(movie);
  }

  enableDateForm() {
    this.dateSelector?.showDate();
  }

  getMovieSchedule() {
    this.selectedDate = this.dateSelector?.selectedDateFunction();
    this.selectedTheater = this.theaterSelector?.selectedTheaterFunction();
    this.exhibitionService.getSchedule(this.selectedMovie!, this.selectedTheater!, this.selectedDate!).subscribe((schedule: any) => {
      if (schedule.length > 0) {
        this.schedNotFound = false;

        // Añadir al carrito
        this.cart.setMovie(this.selectedMovie).subscribe((value) => {});
        this.cart.setTheater(this.selectedTheater).subscribe((value) => {});
        this.cart.setDate(this.selectedDate!).subscribe((movies) => {});
        //

        this.route.navigate(['/moviescheduler']);
      } else {
        this.schedNotFound = true;
        console.log("No hay funciones para la pelicula seleccionada");
      }
    });
  }
}
