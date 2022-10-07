import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funciones } from '../interfaces/funciones';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor(private http: HttpClient) { }

  private funcionesUrl = 'api/funciones';

  seats: any[] = [];
  getFunciones(): Observable<Funciones[]> {
    return this.http.get<Funciones[]>(this.funcionesUrl);
  }

  getAsientos(pelicula: string): Observable<any[]> {
    this.getFunciones().subscribe(funciones => {  
      funciones.filter(funcion => {  
        if(funcion.pelicula === pelicula) {
          this.seats = funcion.seats;
        }
        console.log(this.seats);
        
      });
    });
    return of(this.seats);
  }
}

