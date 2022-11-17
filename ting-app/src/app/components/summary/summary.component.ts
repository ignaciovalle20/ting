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

  movie : string = "";
  theater : string = "";
  date : string = "";
  time : string = "";
  seats: string[] = [];
  extras : string[] = [];
  total : number = 0;

  movieUrlWide: string = "";
  movieUrlMobile: string = "";

  ngOnInit(): void {

    this.movie = this.cart.getMovie();

    this.theater = this.cart.getTheater();
    this.date = this.cart.getDate();
    this.time = this.cart.getTime();
    //this.seats = this.cart.getSeats();
    //this.extras = this.cart.getExtras();
    //this.total = this.cart.getTotal();

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
