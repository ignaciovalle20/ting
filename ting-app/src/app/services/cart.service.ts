import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cart } from '../interfaces/cart';
import { Seats } from '../interfaces/seats';
import { SelectedExtras } from '../interfaces/selectedExtras';

const CART_URL = `${environment.baseApiUrl}/api/cart`;

@Injectable({
  providedIn: 'root'
})
export class CartService {


  qrbody: any;

  constructor(private http: HttpClient) { }


  getCart() : Observable<any> {
    return this.http.get<any>(CART_URL);
  }

  setMovie(movieInp:string) : Observable<any>{
    const body = { movie: movieInp };
    return this.http.put(CART_URL, body);
  }

  setTheater(theaterInp:string) : Observable<any>{
    const body = { theater : theaterInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  setDate(dateInp:string) : Observable<any>{
    const body = { date : dateInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  setTime(timeInp:string) : Observable<any>{
    const body = { time : timeInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  setExhibition(exhibitionInp:string) : Observable<any>{
    const body = { exhibition : exhibitionInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  setPrice(priceInp:number) : Observable<any>{
    const body = { price : priceInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  generateQR() : Observable<any> {
    this.getCart().subscribe((value) => {
      this.qrbody = { qr : value };
    });
    return this.http.put<Cart>(CART_URL+"/"+"genqrcode/", this.qrbody);
  }

  setSeats(seatsInp:Seats[]) : Observable<any>{
    const body = { seats : seatsInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  clearSeats() : Observable<any>{
    const body = { seats : null };
    return this.http.put<Cart>(CART_URL, body);
  }

  setExtras(extrasInp:SelectedExtras[]) : Observable<any>{
    const body = { selectedExtras : extrasInp };
    return this.http.put<Cart>(CART_URL, body);
  }

  getSeats() : any {
    this.getCart().subscribe((value) => {
      return value[0].seats;
    });
  }

  clearCart() : Observable<any>{
    const body = {
      movie: "",
      theater: "",
      date: "",
      time: "",
      price: 0,
      qrcode: "",
      exhibition: "",
      seats: null,
      selectedExtras: null
    };
    return this.http.put<Cart>(CART_URL, body);
  }


}
