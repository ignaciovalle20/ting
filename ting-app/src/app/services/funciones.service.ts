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
  rooms: Room[] = [];
  horarios: Funciones[] = [];

  theaters: string[] = [];

  getFunciones(): Observable<Funciones[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl);
  }

    getAsientos(pelicula: string): Observable<any[]> {
      return this.http.get<Funciones[]>(this.funcionesUrl)
        .pipe(map((funciones: Funciones[]) => {
          funciones.filter((funcion) => {
            if (funcion.movie.name === pelicula) {
              this.rooms = funcion.room ;
            }
            //console.log("this.seats: ", this.salas);
          });
          return this.rooms;
        }));
    } 

  getAsientosByFunction(id: string): Observable<any[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl).pipe(map((funciones: Funciones[]) => {
      funciones.filter((funcion) => {
        if (funcion.id === id) {
          this.rooms = funcion.room;
        }
      });
      return this.rooms;
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

