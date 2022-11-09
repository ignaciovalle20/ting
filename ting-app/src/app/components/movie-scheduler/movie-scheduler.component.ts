import { Component, OnInit } from '@angular/core';
import { Funcion } from 'src/app/interfaces/funcion';
import { FuncionesService } from 'src/app/services/funciones.service';
import {  Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-movie-scheduler',
  templateUrl: './movie-scheduler.component.html',
  styleUrls: ['./movie-scheduler.component.scss']
})
export class MovieSchedComponent implements OnInit {

  funciones: Funcion[] = [];

  movie: String = "";
  theater: String = "";
  date: String = "";
  movieUrlWide: String = "";

  movieUrlMobile: String = "";

  constructor(private funcionesService: FuncionesService, private movieService: MovieService, private route: Router, private cart: CartService) { }


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

    this.funcionesService.getSchedule(this.movie, this.theater, this.date).subscribe((schedule: any) => {
      this.funciones = schedule;
    });
  }

  goNext(f: String) {
    this.cart.setFunction(f);
    this.route.navigate(['/seats']);
  }

}

