import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchases } from '../interfaces/purchases';
import { Moment } from 'moment';
import * as moment from 'moment';

const PURCHASES_URL = `${environment.baseApiUrl}/api/mypurchases`;


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
    const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
    let _now: Moment;
    _now = moment(new Date(), DATE_TIME_FORMAT);
    const body = {
      qrcode: qrcodeInp,
      movie: movieInp,
      theater: theaterInp,
      date: dateInp,
      time: timeInp,
      total: totalInp,
      seats: seatsInp,
      extras: extrasInp,
      purchaseDate: _now
    };
    return this.http.post<any>(PURCHASES_URL, body);
  }

}
