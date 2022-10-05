import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { USERS } from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUser(user: string, pass: string): boolean {

    let userfound = USERS.filter(u => u.username === user);
    if (userfound.length > 0) {
      if (userfound[0].password === pass) {
        return true;
      }
    }
    return false;
  }
}
