import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  movie : String = "";
  moviePrice: number = 0;
  theater : String = "";
  date : String = "";
  funcion : String = "";
  seats : String[] = [];
  extras : String[] = [];

  constructor() { }

  getMovie() {
    return this.movie;
  }

  setMovie(movie: String) {
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

  setTheater(theater: String) {
    this.theater = theater;
  }

  getDate() {
    return this.date;
  }

  setDate(date: String) {
    this.date = date;
  }

  getFunction() {
    return this.funcion;
  }

  setFunction(funcion: String) {  
    this.funcion = funcion;
  }

  getSeats() {
    return this.seats;
  }

  setSeats(seats: String[]) {
    this.seats = seats;
  }

  getExtras() {
    return this.extras;
  }

  setExtras(extras: String[]) {
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
    this.funcion = "";
    this.seats = [];
    this.extras = [];
  }
}
