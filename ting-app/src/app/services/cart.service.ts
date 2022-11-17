import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getCart() : Observable<any>{
    return this.http.get<Cart>(CART_URL+"/"+this.user);
  }

  setMovie(movie2:string) : Observable<any>{
    const body = { movie: "Angular PUT Request Example" };
    console.log("USUARIO "+this.user)
    return this.http.put(CART_URL+"/pepito", body);
  }

  setTheater(theater:string) : Observable<any>{
    const body = { "theater" : theater };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  setDate(date:string) : Observable<any>{
    const body = { "date" : date };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  setTime(time:string) : Observable<any>{
    const body = { "time" : time };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  setExhibition(exhibition:string) : Observable<any>{
    const body = { "exhibition" : exhibition };
    return this.http.put<Cart>(CART_URL+"/"+this.user, body);
  }

  getMovie() : any {
    const carrito = this.getCart.toString();
    console.log(carrito);
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
