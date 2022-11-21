import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { AuthService } from './auth.service';

const PURCHASE_URL = `${environment.baseApiUrl}/api/mypurchases`;

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  user : string = "";

  constructor(private http: HttpClient, private authService: AuthService) { }



  getPurchases() : Observable<any> {
    return this.http.get<any>(PURCHASE_URL+"/");
  }

  addPurchase(purchase: any) : Observable<any> {
    const body = { purchase: purchase};
    return this.http.post<any>(PURCHASE_URL+"/", body);
  }
}
