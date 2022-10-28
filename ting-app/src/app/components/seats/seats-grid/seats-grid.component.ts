import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Room } from "src/app/interfaces/room";
import { Seats } from 'src/app/interfaces/seats';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import  {SeatsComponent } from 'src/app/components/seats/seats.component';
@Component({
  selector: 'app-seats-grid',
  templateUrl: './seats-grid.component.html',
  styleUrls: ['./seats-grid.component.scss']
})
export class SeatsGridComponent implements OnInit {
  
  
  fila1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  fila2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  fila3 = [12, 13, 14, 15, 16, 17];
  fila4 = [18, 19, 20, 21, 22, 23];

  seleccionados: string[] = [];

  seats: Seats[] = [];

  room: Room[] = [];


  function_id?: string;

  checked?: boolean ;

  loaded: boolean = false;
  

  constructor(private funcionesService: FuncionesService, private datasharing: DataSharingService) { }


  @Output () gridChangeEvent = new EventEmitter<Event>();

  ngOnInit(): void {
    this.checked = false;
    
    this.datasharing.selectedFunction$.subscribe((function_id) => {
      this.function_id = function_id.id;
      console.log("function_id", this.function_id);
    });
  console.log(this.function_id)

  if(this.function_id != undefined){
    this.funcionesService.getAsientosByFunction(this.function_id!).subscribe((room: Room[]) => {
      this.room = room;
      console.log("this.sala", this.room);
      console.log("this.asientos", this.seats);
      //retorna un array de arrays, por eso el flat(), para acceder a los elementos dentro.
      this.seats = this.room.map((sala) => sala.seats).flat();
      this.loaded = true;
    });
  }

  }
 

  checkboxClick(event: any) {
    if (event.target.checked) {
      // Si esta seleccionado, lo agregamos a la lista
      this.seleccionados.push(event.target.id);
    } else {
      //Si se setea en False borramos el elemento del array
      this.seleccionados = this.seleccionados.filter((seat: string) => seat !== event.target.id);
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

