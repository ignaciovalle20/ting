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
  checkedTrue: boolean = true;
  checkedFalse: boolean = false;

  empty?: boolean;
  loaded: boolean = false;

  maxSeats: boolean = false;

  constructor(private exhibitionService: ExhibitionService, private cart: CartService) { }

  @Output() gridChangeEvent = new EventEmitter<Event>();

  ngOnInit(): void {
    this.checked = false;
    this.cart.getCart().subscribe(async (cart) => {
      const exhibition_id = await cart[0].exhibition;
      const seats = await cart[0].seats;
      this.seatsFromCart = seats;
      this.exhibition_id = exhibition_id;
      if (this.exhibition_id != undefined) {
        this.buildRoom();
      }
      this.loadSeats();
    });
  }

  loadSeats() {
    if (this.seatsFromCart == null) {
      return;
    }else {
      this.seatsFromCart.forEach(seat => {
        let asiento = seat.row + ',' + seat.seat + " ";
        this.seleccionados = [...this.seleccionados, asiento];
      });
      this.seleccionados.forEach(seat => {
        var seatString = "Fila: " + seat.charAt(0) + " Asiento: " + seat.charAt(2);
        this.seleccionadosDisplay = [...this.seleccionadosDisplay, seatString];
      });
    }
  }

  checkSeats(seat : Seats){
    if (this.seatsFromCart === null) {
      return false;
    } else {
      const isSelected = (element : any) => element.row === seat.row && element.seat === seat.seat;
      if (this.seatsFromCart.some(isSelected)){
        return true;
      } else{
        return false;
      }
    }
  }

  checkboxClick(event: any) {
    if (event.target.checked && this.seleccionados.length < 8) {
      let nuevoAsiento = event.target.id + " ";
      this.seleccionados = [...this.seleccionados, nuevoAsiento];
      this.seleccionadosDisplay = [];
      this.seleccionados.forEach(seat => {
        var seatString = "Fila: " + seat.charAt(0) + " Asiento: " + seat.charAt(2);
        this.seleccionadosDisplay = [...this.seleccionadosDisplay, seatString];
      });
    } else if (!event.target.checked) {
      this.maxSeats = false;
      this.seleccionados = this.seleccionados.filter((seat: string) => seat !== event.target.id + " ");
      this.seleccionadosDisplay = [];
      this.seleccionados.forEach(seat => {
        var seatString = "Fila: " + seat.charAt(0) + " Asiento: " + seat.charAt(2);
        this.seleccionadosDisplay.push(seatString);
      });
    }
    else {
      this.maxSeats = true;
      event.target.checked = false;
      this.gridChangeEvent.emit();
    }
    this.gridChangeEvent.emit();
  }

  getSeats(): string[] {
    return this.seleccionados;
  }

  buildRoom() {
    this.exhibitionService.buildRoom(this.exhibition_id!)
      .subscribe(async (seats) => {
        this.seats = seats;
        this.seats.map((seat) => {
          if (seat.row > this.rows.length) {
            this.rows = [...this.rows, seat.row];
          }
        });
        this.loaded = true;
      });
  }
}
