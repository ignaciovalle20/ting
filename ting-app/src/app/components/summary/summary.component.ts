import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Extra } from 'src/app/interfaces/extras';
import { ExtrasService } from 'src/app/services/extras.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private dataSharing: DataSharingService, private extrasService : ExtrasService, private movieService: MovieService) { }

  movie : string = "";
  theater : String = "";
  date : String = "";
  hora : String = "";
  seats: string = "";
  extras : string[] = [];

  movieUrlWide: string = "";

  movieUrlMobile: string = "";
  ngOnInit(): void {
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

    this.movieService.getMovieImageWide(this.movie).subscribe((value) => {
      this.movieUrlWide = value;
      console.log("Movie URL: " + this.movieUrlWide);
    });

    this.movieService.getMovieImageMobile(this.movie).subscribe((value) => {
      this.movieUrlMobile = value;
      console.log("Movie URL: " + this.movieUrlMobile);
    });
  }

  
}
