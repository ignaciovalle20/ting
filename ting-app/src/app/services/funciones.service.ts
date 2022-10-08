import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funciones } from '../interfaces/funciones';
import { Seats } from '../interfaces/seats';
@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor(private http: HttpClient) { }

  private funcionesUrl = 'api/funciones';

  seats: Seats[] = [];
  horarios: Funciones[] = [];

  cinema: string[] = [];

  getFunciones(): Observable<Funciones[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl);
  }

  getAsientos(pelicula: string): Observable<any[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl)
      .pipe(map((funciones: Funciones[]) => {
        funciones.filter((funcion) => {
          if (funcion.pelicula === pelicula) {
            this.seats = funcion.seats;
          }
          //console.log("this.seats: ", this.seats);
        });
        return this.seats;
      }));
  }

  getCinemaByMovie(pelicula: string): Observable<any[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl)
      .pipe(map((funciones: Funciones[]) => {
        funciones.filter((funcion) => {
          if (funcion.pelicula === pelicula) {
            if (this.cinema.indexOf(funcion.cine) === -1) {
              this.cinema.push(funcion.cine);
            }
          }});
        return this.cinema;
      }));
    }

    getHorarios(pelicula: string, cine : string, date: string): Observable < any[] > {
      return this.http.get<Funciones[]>(this.funcionesUrl)
        .pipe(map((funciones: Funciones[]) => {
          funciones.filter((funcion) => {
            if (funcion.pelicula === pelicula && funcion.cine === cine && funcion.date === date) {
              this.horarios.push(funcion);
            }
          });
          return this.horarios;
        }));
    }
  }

