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
    this.cart.getCart().subscribe(async (cart) => {
      const movie = await cart[0].movie;
      const theater = await cart[0].theater;
      const date = await cart[0].date;
      const time = await cart[0].time;

      this.movieService.getMovieImageWide(movie).subscribe((res) => {
        this.movieUrlWide = res;
      });

      this.movieService.getMovieImageMobile(movie).subscribe((res) => {
        this.movieUrlMobile = res;
      });

      this.movie = movie;
      this.theater = theater;
      this.date = date;
      this.time = time;
    });
  }

  goNext(){
    this.route.navigate(['/processing']);
  }
  
}
