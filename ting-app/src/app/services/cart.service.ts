import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  movie : string = "";
  moviePrice: number = 0;
  theater : string = "";
  date : string = "";
  time : string = "";
  exhibition : string = "";
  seats : string[] = [];
  extras : string[] = [];

  constructor() { }

  getMovie() {
    return this.movie;
  }

  setMovie(movie: string) {
    this.movie = movie;
  }

  getMoviePrice() {
    return this.moviePrice;
  }

  setMoviePrice(price: number) {
    this.moviePrice = price;
  }

  getTheater() {
    return this.theater;
  }

  setTheater(theater: string) {
    this.theater = theater;
  }

  getDate() {
    return this.date;
  }

  setDate(date: string) {
    this.date = date;
  }

  getTime() {
    return this.time;
  }

  setTime(time: string) {
    this.time = time;
  }

  getExhibition() {
    return this.exhibition;
  }

  setExhibition(exhibition: string) {  
    this.exhibition = exhibition;
  }

  getSeats() {
    return this.seats;
  }

  setSeats(seats: string[]) {
    this.seats = seats;
  }

  getExtras() {
    return this.extras;
  }

  setExtras(extras: string[]) {
    this.extras = extras;
  }


  getTotal() {
    let total = 0;
    /*
    total += this.moviePrice * this.seats.length;
    this.extras.forEach(extra => {
      total += extra.price;
    });
    */
    return total;
  }

  clearCart() {
    this.movie = "";
    this.moviePrice = 0;
    this.theater = "";
    this.date = "";
    this.exhibition = "";
    this.seats = [];
    this.extras = [];
  }
}
