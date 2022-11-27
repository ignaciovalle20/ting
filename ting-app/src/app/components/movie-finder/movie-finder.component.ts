import { Component, OnInit, ViewChild } from '@angular/core';
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
  schedulesFound: number = 0;
  now = new Date();

  constructor(private exhibitionService: ExhibitionService, private route: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.clearCart().subscribe(() => { });
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
    const today = this.now.toLocaleString().split(',')[0].replace(/\//g, "-")
    const actualTime = this.convert2Digits(this.now.getHours()) + ":" + this.convert2Digits(this.now.getMinutes());
    this.selectedDate = this.dateSelector?.selectedDateFunction();
    this.selectedTheater = this.theaterSelector?.selectedTheaterFunction();
    this.exhibitionService.getSchedule(this.selectedMovie!, this.selectedTheater!, this.selectedDate!).subscribe(async (schedule: any) => {
      
      // verificamos que haya horarios disponibles
      schedule.forEach((exhibition: any) => {
        // si alguna funcion tiene horario mayor al actual, entonces hay funciones disponibles
        // y seteamos schedNotFound en false
        if (this.selectedDate === today) {
          if (exhibition.time > actualTime) {
            this.schedulesFound++;
          }
        } else {
          this.schedulesFound++;
        }
      });

      // si se setea el schedNotFound en false, entonces hay funciones disponibles 
      if (this.schedulesFound > 0) {
        this.schedNotFound = false;
        this.cartService.clearCart().subscribe(() => {});
        this.cartService.setMovie(this.selectedMovie).subscribe(() => {
          this.cartService.setTheater(this.selectedTheater).subscribe(() => {
            this.cartService.setDate(this.selectedDate!).subscribe(() => {
              this.route.navigate(['/moviescheduler']);
            });
          });
        });
      } else {
        this.schedNotFound = true;
      }
    });
  }

  convert2Digits(num: number) {
    return ("0" + num).slice(-2);
  }
}
