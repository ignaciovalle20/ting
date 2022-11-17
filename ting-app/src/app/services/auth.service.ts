import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import * as moment from "moment";

const LOGIN_URL = `${environment.baseApiUrl}/api/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  logedUsers: string[] = [

  ];

  /*   getUser(user: string, pass: string): boolean {
  
      let userfound = USERS.filter(u => u.username === user);
      if (userfound.length > 0) {
        if (userfound[0].password === pass) {
          this.logedUsers.push(user);
          return true;
        }
      }
      return false;
    }
   *//* 
getUser(user:string, pass: string){
 return this.http.get<any>(LOGIN_URL)
} */


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(LOGIN_URL, { username, password })
      .pipe(tap(res => {
        this.setSession(res);
        console.log(res);
      }

      ));
  }

  setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
}
