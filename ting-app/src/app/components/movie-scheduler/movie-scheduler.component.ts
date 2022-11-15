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

  constructor(private exhibitionService: ExhibitionService, private movieService: MovieService, private route: Router, private cart: CartService) { }


  ngOnInit(): void {

    this.movie = this.cart.getMovie();
    this.theater = this.cart.getTheater();
    this.date = this.cart.getDate();
    /*
    this.dataSharing.selectedMovie$.subscribe((value) => {
      this.movie = value;
    });
    this.dataSharing.selectedTheater$.subscribe((value) => {
      this.theater = value;
    });
    this.dataSharing.selectedDate$.subscribe((value) => {
      this.date = value;
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

    this.exhibitionService.getSchedule(this.movie, this.theater, this.date).subscribe((schedule: any) => {
      this.exhibitions = schedule;
    });
  }

  goNext(f: string, t: string) {
    this.cart.setExhibition(f);
    this.cart.setTime(t);
    this.route.navigate(['/seats']);
  }

}

