import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funciones } from '../interfaces/funciones';
import { Seats } from "../interfaces/seats";
import { Room } from '../interfaces/room';
@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor(private http: HttpClient) { }

  private funcionesUrl = 'api/funciones';

  seats: Seats[] = [];
  room?: Room;
  horarios: Funciones[] = [];

  theaters: string[] = [];

  getFunciones(): Observable<Funciones[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl);
  }

  /*     getAsientos(pelicula: string): Observable<any[]> {
        return this.http.get<Funciones[]>(this.funcionesUrl)
          .pipe(map((funciones: Funciones[]) => {
            funciones.filter((funcion) => {
              if (funcion.movie.name === pelicula) {
                funcion.room.map((room) => {
                  this.room = room;
                });
              }
            });
            return this.room.seats;
          }));
      }  */

  getAsientosByFunction(id: string): Observable<any[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl)
      .pipe(map((funciones: Funciones[]) => {
        funciones.filter((funcion) => {
          if (funcion.id === id) {
            funcion.room.map((room) => {
              this.room = room;
            });
          }
          console.log("Antes de salir ", this.room?.seats);
        });

        // Seteamos lo asientos unavailable de la funcion
        /*           funcion.seatsunavailable.filter(seat => {
                    this.room?.seats.filter((seatRoom) => {
                      if (seatRoom.row === seat.row && seatRoom.seat === seat.seat) {
                        seatRoom.available = false;
                        console.log("seatRoom", seatRoom);
                      }
                    });
                  });
                } */


        console.log("this.room.seats", this.room?.seats);
        return this.room!.seats;
      }));
  }

  getAsientosByFunction2(id: string): Observable<any[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl)
      .pipe(map((funciones: Funciones[]) => {
        funciones.filter((funcion) => {
          if (funcion.id === id) {
            funcion.room.map((room) => {
              this.room = room;
              for (let i = 0; i < funcion.seatsunavailable.length; i++) {
                for (let j = 0; j < this.room.seats.length; j++) {
                  if (funcion.seatsunavailable[i].row === this.room.seats[j].row && funcion.seatsunavailable[i].seat === this.room.seats[j].seat) {
                    console.log("Antes", this.room!.seats[j]);
                    this.room.seats[j].available = false;
                    console.log("Despues", this.room!.seats[j]);
                  }
                }
              }
              
            });
            
          }
        });
        console.log ("ESTOS", this.room!.seats);
        return this.room!.seats;

      }));
  }
                 

  




  getTheaterByMovie(pelicula: string): Observable<any[]> {
    this.theaters = [];
    return this.http.get<Funciones[]>(this.funcionesUrl)
      .pipe(map((funciones: Funciones[]) => {
        funciones.filter((funcion) => {
          if (funcion.movie.name === pelicula) {
            if (this.theaters.indexOf(funcion.theater) === -1) {
              this.theaters.push(funcion.theater);
            }
          }
        });
        return this.theaters;
      }));
  }

  getSchedule(movie: string, theater: string, date: string): Observable<any[]> {
    this.horarios = [];
    return this.http.get<Funciones[]>(this.funcionesUrl)
      .pipe(map((funciones: Funciones[]) => {
        funciones.filter((funcion) => {
          if (funcion.movie.name === movie && funcion.theater === theater && funcion.date === date) {
            this.horarios.push(funcion);
          }
        });
        return this.horarios;
      }));
  }

  /*     checkScheduler(movie:string, theater: string, date: string): boolean {
        let found = false;
        this.http.get<Funciones[]>(this.funcionesUrl)
          .pipe(map((funciones: Funciones[]) => {
            funciones.filter((funcion) => {
              if (funcion.movie.name === movie && funcion.theater === theater && funcion.date === date ) {
                found = true;
              }
            });
          }));
        return found;
      } */


}

