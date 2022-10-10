import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private movie$ = new BehaviorSubject<any>({});
  selectedMovie$ = this.movie$.asObservable();

  private theater$ = new BehaviorSubject<any>({});
  selectedTheater$ = this.theater$.asObservable();

  private date$ = new BehaviorSubject<any>({});
  selectedDate$ = this.date$.asObservable();

  private funcion$ = new BehaviorSubject<any>({});
  selectedFuncion$ = this.funcion$.asObservable();
  constructor() { }

  setMovie(movie: any) {
    this.movie$.next(movie);
  }

  setTheater(theater: any) {
    this.theater$.next(theater);
  }

  setDate(date: any) {
    this.date$.next(date);
  }

  setFuncion(funcion: any) {
    this.funcion$.next(funcion);
  }
}
