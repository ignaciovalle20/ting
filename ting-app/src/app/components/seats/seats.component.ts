import { Component, OnInit, ViewChild } from '@angular/core';
import { SeatsGridComponent } from './seats-grid/seats-grid.component';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';
import { Seats } from 'src/app/interfaces/seats';

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

  constructor(private cart: CartService, private route: Router, private movieService: MovieService) { }

  ngOnInit(): void {

    this.cart.getCart().subscribe(async (cart) => {
      const movie = await cart[0].movie;

      this.movieService.getMovieImageWide(movie).subscribe((res) => {
        this.movieUrlWide = res[0].movieImg.urlWide;
      });

      this.movieService.getMovieImageMobile(movie).subscribe((res) => {
        this.movieUrlMobile = res[0].movieImg.url;
      });
    
    this.movie = movie;
    });
  }
 
  


  @ViewChild (SeatsGridComponent) seatsGridComponent!: SeatsGridComponent ; 

  clearSeatInfo(){
    this.noSeatsSelected = false;
  }
 
  getChangeOnGrid(){
    const seats = this.seatsGridComponent.getSeats().length;
    if (seats === 0){
      this.noSeatsSelected = true;
    } else {
      this.noSeatsSelected = false;
    }
  }

  gotoNextPage(){
    console.log("getseats",this.seatsGridComponent.getSeats());
    const seats = this.seatsGridComponent.getSeats();
    var selectedSeats : Seats[] = [];
    if (this.seatsGridComponent.getSeats().length > 0) {
      //this.cart.setSeats(this.seatsGridComponent.getSeats());
      seats.forEach(seat => {
        let row = Number(seat.charAt(0));
        let seatN = Number(seat.charAt(2));
        var newSeat: Seats = { row: row, seat: seatN, empty: false, available: false };
        selectedSeats.push(newSeat);
      });
      //console.log("ASIENTOS SELECCIONADOS :",selectedSeats);
      this.cart.clearSeats().subscribe();
      this.cart.setSeats(selectedSeats).subscribe();
      this.route.navigate(['/snacks']);
      this.noSeatsSelected = false;
    }else{
      this.noSeatsSelected = true;
    }
  }

}
