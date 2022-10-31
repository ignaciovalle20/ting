import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Room } from "src/app/interfaces/room";
import { Seats } from 'src/app/interfaces/seats';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { SeatsComponent } from 'src/app/components/seats/seats.component';
@Component({
  selector: 'app-seats-grid',
  templateUrl: './seats-grid.component.html',
  styleUrls: ['./seats-grid.component.scss']
})
export class SeatsGridComponent implements OnInit {


  /*  fila1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   fila2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   fila3 = [12, 13, 14, 15, 16, 17];
   fila4 = [18, 19, 20, 21, 22, 23]; */

  seleccionados: string[] = [];
  seats: Seats[] = [];

  room: Room[] = [];

  rows: number[] = [];
  function_id?: string;

  checked?: boolean;

  empty?: boolean;
  loaded: boolean = false;

  maxSeats: boolean = false;

  constructor(private funcionesService: FuncionesService, private datasharing: DataSharingService) { }


  @Output() gridChangeEvent = new EventEmitter<Event>();

  ngOnInit(): void {
    this.checked = false;

    this.datasharing.selectedFunction$.subscribe((function_id) => {
      this.function_id = function_id.id;
      console.log("function_id", this.function_id);
    });
    console.log(this.function_id)

    if (this.function_id != undefined) {
      this.funcionesService.getAsientosByFunction2(this.function_id!).subscribe((seats: Seats[]) => {
        this.seats = seats;
        //console.log("this.sala", this.room);
        console.log("this.asientos", this.seats);
        //retorna un array de arrays, por eso el flat(), para acceder a los elementos dentro.
       /*  this.seats = this.room.map((sala) => sala.seats).flat();
        console.log("Carga de asientos", this.seats) */
        //cargamos la lista de filas para luego armar la tabla
        this.seats.forEach((seat) => {

          if (seat.row > this.rows.length) {
            this.rows = [...this.rows, seat.row];
          }
        });
        console.log("this.rows", this.rows);
      });



      this.loaded = true;
    }


  }


  checkboxClick(event: any) {
    console.log("maxseatAfuera", this.maxSeats);
    console.log("event", event.target );      
      if (event.target.checked && this.seleccionados.length < 8) {
        // Si esta seleccionado, lo agregamos a la lista
        console.log(event.target)
        // Con el push no refresca automaticamente el dom
        //this.seleccionados.push(event.target.id);
        let nuevoAsiento = event.target.id + " ";
        this.seleccionados = [...this.seleccionados, nuevoAsiento];
      } else if (!event.target.checked) {
        //Si se setea en False borramos el elemento del array
        this.maxSeats = false;
        console.log("entre aca ", this.maxSeats);
        this.seleccionados = this.seleccionados.filter((seat: string) => seat !== event.target.id + " ");
      }
      else {
        //si ya se seleccionaron 8 asientos, no se puede seleccionar mas
        this.maxSeats = true;
		    event.target.checked = false;
        //esto es para que se muestre el mensaje de error
        this.gridChangeEvent.emit();
      }
      // (<HTMLInputElement>document.getElementById("seatsSelected")).innerHTML = this.seleccionados.toString();
      console.log("this.seleccionados", this.seleccionados);
      console.log("this.seats", this.seats);

      //esto es para que se borre el mensaje de error cuando se selecciona un asiento
      this.gridChangeEvent.emit();
    
    }


    getSeats(): string[] {
      return this.seleccionados;
    }
  }

/* const filas = [{"nombre":"A", "cantAsientos":1},
           {"nombre":"B", "cantAsientos":2},
           {"nombre":"C", "cantAsientos":3}];
let asientos = [];
filas.forEach(f => { let i=0;
                     while (i< f.cantAsientos){
                        asientos = [...asientos, f.nombre + i];
                     i++;
                }}); */