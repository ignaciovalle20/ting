import { Component, OnInit } from '@angular/core';
import { Funcion } from 'src/app/interfaces/funcion';
import { FuncionesService } from 'src/app/services/funciones.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-scheduler',
  templateUrl: './movie-scheduler.component.html',
  styleUrls: ['./movie-scheduler.component.scss']
})
export class MovieSchedComponent implements OnInit {

  funciones: Funcion[] = [];

  movie: string = "";
  theater: string = "";
  date: string = "";
  movieUrlWide: string = "";

  movieUrlMobile: string = "";

  constructor(private funcionesService: FuncionesService, private movieService: MovieService, private route: Router, private activeRoute: ActivatedRoute, private dataSharing: DataSharingService) { }


  ngOnInit(): void {
    this.dataSharing.selectedMovie$.subscribe((value) => {
      this.movie = value;
    });
    this.dataSharing.selectedTheater$.subscribe((value) => {
      this.theater = value;
    });
    this.dataSharing.selectedDate$.subscribe((value) => {
      this.date = value;
    });

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

  goNext(f: any) {
    this.dataSharing.setFunction(f)
    this.route.navigate(['/seats']);
  }

}

