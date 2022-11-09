import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private cart: CartService, private movieService: MovieService, private route: Router) { }

  movie : String = "";
  theater : String = "";
  date : String = "";
  hora : String = "";
  seats: String[] = [];
  extras : String[] = [];
  total : number = 0;

  movieUrlWide: String = "";
  movieUrlMobile: String = "";

  ngOnInit(): void {

    this.movie = this.cart.getMovie();
    this.theater = this.cart.getTheater();
    this.date = this.cart.getDate();
    this.hora = this.cart.getFunction();
    this.seats = this.cart.getSeats();
    this.extras = this.cart.getExtras();
    this.total = this.cart.getTotal();

    /*
    this.dataSharing.selectedMovie$.subscribe((value) => {
      this.movie = value;
    });
    this.dataSharing.selectedTheater$.subscribe((value) => {
      this.theater = value;
    });
    this.dataSharing.selectedDate$.subscribe((value) => {
      this.date = value.split("-").reverse().join("/");;
    });
    this.dataSharing.selectedFunction$.subscribe((value) => {
      this.hora = value.horario;
    });
    this.dataSharing.selectedSeats$.subscribe((value) => {
      this.seats = value;
    });
    this.dataSharing.selectedExtras$.subscribe((value) => {
      this.extras = value;
    });
    */

    this.movieService.getMovieImageWide(this.movie).subscribe((value) => {
      this.movieUrlWide = value;
      console.log("Movie URL: " + this.movieUrlWide);
    });

    this.movieService.getMovieImageMobile(this.movie).subscribe((value) => {
      this.movieUrlMobile = value;
      console.log("Movie URL: " + this.movieUrlMobile);
    });
  }

  goNext(){
    this.route.navigate(['/processing']);
  }
  
}
