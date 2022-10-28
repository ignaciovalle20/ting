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

  private function$ = new BehaviorSubject<any>({});
  selectedFunction$ = this.function$.asObservable();
  
  private seats$ = new BehaviorSubject<any>({});
  selectedSeats$ = this.seats$.asObservable();

  private extras$ = new BehaviorSubject<any>({});
  selectedExtras$ = this.extras$.asObservable();

  private extrasSelec$ = new BehaviorSubject<any>({});
  selectedExtrasSelec$ = this.extrasSelec$.asObservable();

  
  
 
  constructor() {}

  setMovie(movie: any) {
    this.movie$.next(movie);
  }

  setTheater(theater: any) {
    this.theater$.next(theater);
  }

  setDate(date: any) {
    this.date$.next(date);
  }
  setFunction(f: any) {
    this.function$.next(f);
  }
  setSeats(seats: any) {
    this.seats$.next(seats);
  }
  setExtras(extras: any) {
    this.extras$.next(extras);
  }

  setExtrasSelec(extrasS: any) {
    this.extrasSelec$.next(extrasS);
  }
}
