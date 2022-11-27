import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchases } from '../interfaces/purchases';

const PURCHASES_URL = `${environment.baseApiUrl}/api/mypurchases`;

const PAYMENT_URL = `${environment.baseApiUrl}/api/payment`;

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<Purchases[]> {
    return this.http.get<Purchases[]>(PURCHASES_URL);
  }

  getPurchasesQR(qrcodeInp: string): Observable<Purchases[]> {
    return this.http.get<Purchases[]>(PURCHASES_URL + '/' + qrcodeInp);
  }

  addPurchase(qrcodeInp: string, movieInp: string, theaterInp: string, dateInp: string, timeInp: string, totalInp: number, seatsInp: string[], extrasInp: string[]) : Observable<any> {
    var today = new Date();
    var now = today.toLocaleString();
    console.log(now);
    const body = {
      qrcode: qrcodeInp,
      movie: movieInp,
      theater: theaterInp,
      date: dateInp,
      time: timeInp,
      total: totalInp,
      seats: seatsInp,
      extras: extrasInp,
      purchaseDate: now
    };
    return this.http.post<any>(PURCHASES_URL, body);
  }

  payment(): Observable<any> {
    return this.http.get<any>(PAYMENT_URL);
  }

}
