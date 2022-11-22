import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Seats } from 'src/app/interfaces/seats';
import { SelectedExtras } from 'src/app/interfaces/selectedExtras';
import { Exhibition } from 'src/app/interfaces/exhibition';
import { ExhibitionService } from 'src/app/services/exhibition.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private cart: CartService, private movieService: MovieService, private route: Router, private exhibitionService : ExhibitionService) { }

  movie : string = "";
  theater : string = "";
  date : string = "";
  time : string = "";
  seats : Seats[] = [];
  seatsString: string[] = [];
  extras : string[] = [];
  price : number = 0;
  total : number = 0;
  exhibition : string = "";
  selectedExtras : SelectedExtras[] = [];

  movieUrlWide: string = "";
  movieUrlMobile: string = "";

  ngOnInit(): void {

    this.cart.generateQR().subscribe();
    this.cart.getCart().subscribe(async (cart) => {
      const movie = await cart[0].movie;
      const theater = await cart[0].theater;
      const date = await cart[0].date;
      const time = await cart[0].time;
      const exhibition = await cart[0].exhibition;
      const seats = await cart[0].seats;
      const extras = await cart[0].selectedExtras;
      const price = await cart[0].price;

      this.movieService.getMovieImageWide(movie).subscribe((res) => {
        this.movieUrlWide = res[0].movieImg.urlWide;
      });

      this.movieService.getMovieImageMobile(movie).subscribe((res) => {
        this.movieUrlMobile = res[0].movieImg.url;
      });

      this.movie = movie;
      this.theater = theater;
      this.date = date;
      this.time = time;
      this.seats = seats;
      this.selectedExtras = extras;
      this.exhibition = exhibition;
      this.price = price;
      this.seatsToString(this.seats);
      this.extrasToString(this.selectedExtras);
      this.calculatePrice();
    });
  }

  calculatePrice(){
    this.total += this.price * this.seats.length;
    if (this.selectedExtras != null){
      this.selectedExtras.forEach(extra => {
        this.total += extra.price * extra.quantity;
      });
    }
  }

  seatsToString(seats: Seats[]){
    seats.forEach(seat => {
      var seatString = "Fila: " + seat.row + " Asiento: " + seat.seat;
      this.seatsString.push(seatString);
    });
  }

  extrasToString(extrass: SelectedExtras[]){
    extrass.forEach(extra => {
      var extraString = extra.name + " x" + extra.quantity;
      this.extras.push(extraString);
    });
  }

  //Botón de pagar
  goNext(){
    this.exhibitionService.putSeats(this.exhibition, this.seats).subscribe();
    this.route.navigate(['/processing']);
  }
  
}
