import { Component, OnInit } from '@angular/core';
import { Exhibition } from 'src/app/interfaces/exhibition';
import { ExhibitionService } from 'src/app/services/exhibition.service';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-movie-scheduler',
  templateUrl: './movie-scheduler.component.html',
  styleUrls: ['./movie-scheduler.component.scss']
})
export class MovieSchedComponent implements OnInit {

  exhibitions: Exhibition[] = [];

  movie: string = "";
  theater: string = "";
  date: string = "";
  movieUrlWide: string = "";
  movieUrlMobile: string = "";

  constructor(private exhibitionService: ExhibitionService, private movieService: MovieService, private route: Router, private cart: CartService) {
  }

   ngOnInit(){

    this.cart.getCart().subscribe(async (cart) => {
      const movie = await cart[0].movie;
      const theater = await cart[0].theater;
      const date = await cart[0].date;
    

    this.movieService.getMovieImageWide(movie).subscribe((res) => {
      this.movieUrlWide = res;
      console.log("Movie URL: " + this.movieUrlWide);
    });

    this.movieService.getMovieImageMobile(movie).subscribe((res) => {
      this.movieUrlMobile = res;
      console.log("Movie URL: " + this.movieUrlMobile);
    });

    this.exhibitionService.getSchedule(movie, theater, date).subscribe((schedule: any) => {
      this.exhibitions = schedule;
    });
    this.movie = movie;
    this.theater = theater;
    this.date = date;
    });
  }

  goNext(f: string, t: string) {
    console.log("Exhibition: " + f + " " + t);
    this.cart.setExhibition(f).subscribe((value) => {});
    this.cart.setTime(t).subscribe((value) => {});
    this.route.navigate(['/seats']);
  }

}

