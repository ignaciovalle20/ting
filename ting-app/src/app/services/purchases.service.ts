import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchases } from '../interfaces/purchases';

const PURCHASES_URL = `${environment.baseApiUrl}/api/mypurchases`;

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<Purchases[]> {
    return this.http.get<Purchases[]>(PURCHASES_URL);
  }

  addPurchase(): Observable<Purchases[]> {
    return this.http.get<Purchases[]>(PURCHASES_URL);
  }

}
