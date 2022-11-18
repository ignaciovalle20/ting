import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cart } from '../interfaces/cart';

const CART_URL = `${environment.baseApiUrl}/api/cart`;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  user : string = "";

  constructor(private http: HttpClient) { }

  setUser(user: string) {
    this.user = user;
  }

  getCart() : Observable<any> {
    return this.http.get<any>(CART_URL+"/"+this.user);
  }

  setMovie(movieInp:string) : Observable<any>{
    const body = { movie: movieInp };
    return this.http.put(CART_URL+"/"+this.user, body);
  }

  setTheater(theaterInp:string) : Observable<any>{
    const body = { theater : theaterInp };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  setDate(dateInp:string) : Observable<any>{
    const body = { date : dateInp };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  setTime(timeInp:string) : Observable<any>{
    const body = { time : timeInp };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  setExhibition(exhibitionInp:string) : Observable<any>{
    const body = { exhibition : exhibitionInp };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  getMovie() : any {
    return "xd";
  }

  getTheater() : any {
    return this.getCart.toString();
  }

  getDate() : any {
    this.getCart().subscribe((value) => {
      return value.date;
    });
  }

  getTime() : any {
    this.getCart().subscribe((value) => {
      return value.time;
    });
  }

  getExhibition() : any {
    this.getCart().subscribe((value) => {
      return value.exhibition;
    });
  }
}
