import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExhibitionService } from 'src/app/services/exhibition.service';
import { Room } from "src/app/interfaces/room";
import { Seats } from 'src/app/interfaces/seats';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-seats-grid',
  templateUrl: './seats-grid.component.html',
  styleUrls: ['./seats-grid.component.scss']
})
export class SeatsGridComponent implements OnInit {

  seleccionados: string[] = [];
  seleccionadosDisplay: string[] = [];
  seats: Seats[] = [];

  seatsFromCart: Seats[] = [];

  seatsUnavailables: Seats[] = [];
  room?: Room;

  rows: number[] = [];
  exhibition_id?: string;

  checked?: boolean;

  empty?: boolean;
  loaded: boolean = false;

  maxSeats: boolean = false;

  constructor(private exhibitionService: ExhibitionService, private cart: CartService) { }


  @Output() gridChangeEvent = new EventEmitter<Event>();

  ngOnInit(): void {
    this.checked = false;
    this.cart.getCart().subscribe(async (cart) => {
      const exhibition_id = await cart[0].exhibition;
      this.exhibition_id = exhibition_id;
      if (this.exhibition_id != undefined) {
        this.buildRoom();
      }
    });
    this.cart.getSeats().subscribe(async (seatscart : any) => {
      this.seatsFromCart = seatscart;
    });
  }

  buildRoom() {
    console.log("BUILD ROOM");
    this.exhibitionService.buildRoom(this.exhibition_id!)
      .subscribe(async (seats) => {
        this.seats = seats;
        console.log("this.seats", this.seats);
        this.seats.map((seat) => {
          if (seat.row > this.rows.length) {
            this.rows = [...this.rows, seat.row];
          }
        });
        this.loaded = true;
      }
      );
  }

  checkboxClick(event: any) {
    if (event.target.checked && this.seleccionados.length < 8) {
      // Si esta seleccionado, lo agregamos a la lista
      console.log(event.target)
      // Con el push no refresca automaticamente el dom
      let nuevoAsiento = event.target.id + " ";
      this.seleccionados = [...this.seleccionados, nuevoAsiento];
      this.seleccionadosDisplay = [];
      this.seleccionados.forEach(seat => {
        var seatString = "Fila: " + seat.charAt(0) + " Asiento: " + seat.charAt(2);
        this.seleccionadosDisplay = [...this.seleccionadosDisplay, seatString];
      });

    } else if (!event.target.checked) {
      //Si se setea en False borramos el elemento del array
      this.maxSeats = false;
      this.seleccionados = this.seleccionados.filter((seat: string) => seat !== event.target.id + " ");
      this.seleccionadosDisplay = [];
      this.seleccionados.forEach(seat => {
        var seatString = "Fila: " + seat.charAt(0) + " Asiento: " + seat.charAt(2);
        this.seleccionadosDisplay.push(seatString);
      });
    }
    else {
      //si ya se seleccionaron 8 asientos, no se puede seleccionar mas
      this.maxSeats = true;
      event.target.checked = false;
      //esto es para que se muestre el mensaje de error
      this.gridChangeEvent.emit();
    }
    // (<HTMLInputElement>document.getElementById("seatsSelected")).innerHTML = this.seleccionados.tostring();

    //esto es para que se borre el mensaje de error cuando se selecciona un asiento
    this.gridChangeEvent.emit();

  }


  getSeats(): string[] {
    return this.seleccionados;
  }
}


      /*      this.funcionesService.getSala(this.exhibition_id).subscribe((room) => {
             room.seats.forEach(seat => {
               this.seats.push(seat);
             });
             console.log("this.seats SEATGRID", this.seats);
             this.seats.forEach((seat) => {
     
               if (seat.row > this.rows.length) {
                 this.rows = [...this.rows, seat.row];
               }
             });
             console.log("this.rows", this.rows);
           }) */
      /*
      this.funcionesService.getAsientosOcupados(this.exhibition_id).subscribe((seats) => {
        seats.forEach((seat: Seats)  => {
          this.seatsUnavailables.push(seat);
        });
        console.log("seatsUnavailables", this.seatsUnavailables);
        
      }) */

      /*   sala.forEach(element => {
          console.log("Element", element);
          this.seats.push(element);
        }); */

      //console.log("this.sala", this.room);

      //retorna un array de arrays, por eso el flat(), para acceder a los elementos dentro.
      /*  this.seats = this.room.map((sala) => sala.seats).flat();
       console.log("Carga de asientos", this.seats) */
      //cargamos la lista de filas para luego armar la tabla




      /*       var asientos: Seats [] = this.funcionesService.armoSala(this.exhibition_id!);
            console.log("asientos", asientos);
          */

/* const filas = [{"nombre":"A", "cantAsientos":1},
           {"nombre":"B", "cantAsientos":2},
           {"nombre":"C", "cantAsientos":3}];
let asientos = [];
filas.forEach(f => { let i=0;
                     while (i< f.cantAsientos){
                        asientos = [...asientos, f.nombre + i];
                     i++;
                }}); */

    /*     console.log("seats", seats);
    console.log("this.seats ESTE", this.seats)
    this.seats.map((seat) => {
      console.log("seat", seat);
    }); */

  /* this.seats.map((seat) => {
      console.log("seat", seat);
      console.log("seat.row", seat.row);
      console.log("this.rows", this.rows);
      if (seat.row > this.rows.length) {
        this.rows = [...this.rows, seat.row];
      }
    }
  ); */