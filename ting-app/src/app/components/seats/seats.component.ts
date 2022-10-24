import { Component, OnInit, ViewChild } from '@angular/core';
import { SeatsGridComponent } from './seats-grid/seats-grid.component';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  movie: string = "";
  movieUrlWide: string = "";
  movieUrlMobile: string = "";
 noSeatsSelected: boolean = false;

  constructor(private datasharing: DataSharingService, private route: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.datasharing.selectedSeats$?.subscribe((value) => { 
    console.log("selectedSeats",value);
    });

  this.datasharing.selectedMovie$.subscribe((value) => {
    this.movie = value;
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
 
  


  @ViewChild (SeatsGridComponent) seatsGridComponent!: SeatsGridComponent ; 

  clearSeatInfo(){
    this.noSeatsSelected = false;
  }
 
  getChangeOnGrid(){
  this.datasharing.selectedSeats$?.subscribe((value) => { 
    if (value.length == 0) {
      this.noSeatsSelected = true;
    } else {
      this.noSeatsSelected = false;
    }
  });
  }

  gotoNextPage(){
    console.log("getseats",this.seatsGridComponent.getSeats());
    if (this.seatsGridComponent.getSeats().length > 0) {
      this.datasharing.setSeats(this.seatsGridComponent.getSeats());
      this.route.navigate(['/snacks']);
      this.noSeatsSelected = false;
    }else{
      this.noSeatsSelected = true;
    }
  
  }

}
