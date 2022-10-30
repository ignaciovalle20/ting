import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seats } from 'src/app/interfaces/seats';
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})



export class SeatComponent implements OnInit {

@Output() seatClickEvent = new EventEmitter<Event>();

@Input() value?: any ;
@Input() seat?: Seats;

@Input() checked?: boolean;

@Input() disabled?: boolean;
@Input() id: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  seatClick(event: Event) {
    this.seatClickEvent.emit(event);
   // console.log("EVENTO DEL SEAT",event)
  }

}
