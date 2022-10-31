import { Injectable } from '@angular/core';
import { Observable, of, map, switchMapTo } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funcion } from '../interfaces/funcion';
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
  horarios: Funcion[] = [];

  theaters: string[] = [];

  seatsUnavailable: Seats[] = [];

  getFuncion(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(this.funcionesUrl);
  }

  /*     getAsientos(pelicula: string): Observable<any[]> {
        return this.http.get<Funcion[]>(this.funcionesUrl)
          .pipe(map((funciones: Funcion[]) => {
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

  /*  getAsientosByFunction(id: string): Observable<any[]> {
     return this.http.get<Funcion[]>(this.funcionesUrl)
       .pipe(map((funciones: Funcion[]) => {
         funciones.filter((funcion) => {
           if (funcion.id === id) {
             funcion.room.map((room) => {
               this.room = room;
             });
           }
           console.log("Antes de salir ", this.room?.seats);
         });
  */
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


  /*         console.log("this.room.seats", this.room?.seats);
          return this.room!.seats;
        }));
    }
   */
  getAsientosByFunction2(id: string): any {
    return this.http.get<Funcion[]>(this.funcionesUrl)
      .pipe(map((funciones: Funcion[]) => {
        funciones.filter((funcion) => {
          if (funcion.id === id) {
            this.room = funcion.room;
          }
          for (let i = 0; i < funcion.seatsUnavailable.length; i++) {
            for (let j = 0; j < this.room!.seats.length; j++) {
              if (funcion.seatsUnavailable[i].row === this.room!.seats[j].row && funcion.seatsUnavailable[i].seat === this.room!.seats[j].seat) {
                console.log("Antes", this.room!.seats[j]);
                this.room!.seats[j].available = false;
                console.log("Despues", this.room!.seats[j]);
              }
            }
            console.log("Este cl", this.room!.seats);
          }
          console.log("Este 2 cl", this.room!.seats);
        });

      }
      ));
  }


  /*   getAsientos(id: string): any {
      let funciones = this.http.get<Funcion[]>(this.funcionesUrl);
      funciones.forEach((funcion) => {
        if (funcion === id) {
          this.room = funcion.room;
          return this.room.seats.map((seat) => {
            for (let j = 0; j < this.room!.seats.length; j++) {
              if (funcion.seatsunavailable[j].row === seat.row && funcion.seatsunavailable[j].seat === seat.seat) {
                console.log("Antes", this.room!.seats[j]);
                seat.available = false;
                console.log("Despues", this.room!.seats[j]);
              }
            })
      }); */







  getTheaterByMovie(pelicula: string): Observable<any[]> {
    this.theaters = [];
    return this.http.get<Funcion[]>(this.funcionesUrl)
      .pipe(map((funciones: Funcion[]) => {
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
    return this.http.get<Funcion[]>(this.funcionesUrl)
      .pipe(map((funciones: Funcion[]) => {
        funciones.filter((funcion) => {
          if (funcion.movie.name === movie && funcion.theater === theater && funcion.date === date) {
            this.horarios.push(funcion);
          }
        });
        return this.horarios;
      }));
  }


  getAsientosOcupados(id: string): Seats[] {
    this.seatsUnavailable = [];
    console.log("id", id);
    this.http.get<Funcion[]>(this.funcionesUrl).pipe(map((funcion) => {
      if (funcion.find(f => f.id == id)) {
        this.seatsUnavailable = funcion.find(f => f.id == id)!.seatsUnavailable;
        this.seatsUnavailable.push(funcion.find(f => f.id == id)!.seatsUnavailable);
        console.log("this.seatsUnavailable", this.seatsUnavailable);
      }
    })).subscribe();
    console.log("this.seatsUnavailable2", this.seatsUnavailable);
    return this.seatsUnavailable;
  }
  /*       });
      }))
      console.log("seatsUnavailable", this.seatsUnavailable);
      return this.seatsUnavailable;
    }
   */
  obtenerAsientos(funcionID: string) {
    var asientos: Seats[] = [];

    var funciones = this.http.get<Funcion[]>(this.funcionesUrl).subscribe();
    var asientosOcupados = this.getAsientosOcupados(funcionID);
    console.log("funciones", funciones);
    console.log("asientosOcupados", asientosOcupados);
    if (Array.isArray(funciones)) {	// Si es un array
      var funcion = funciones.find(f => f.id == funcionID);
      asientos = asientosOcupados.map(s => {
        if (funcion.seats.some((fs: { row: number; seat: number; }) => fs.row == s.row && fs.seat == s.seat))
          s.available = false;
        return s;
      })
      console.log("asientos", asientos);
      return asientos;
    }
    return asientos;
  }


  /*     checkScheduler(movie:string, theater: string, date: string): boolean {
        let found = false;
        this.http.get<Funcion[]>(this.funcionesUrl)
          .pipe(map((funciones: Funcion[]) => {
            funciones.filter((funcion) => {
              if (funcion.movie.name === movie && funcion.theater === theater && funcion.date === date ) {
                found = true;
              }
            });
          }));
        return found;
      } */


}

