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
}

