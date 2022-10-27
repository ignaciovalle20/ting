import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-extras-item',
  templateUrl: './extras-item.component.html',
  styleUrls: ['./extras-item.component.scss']
})
export class ExtrasItemComponent implements OnInit {

  @Input() price : number | undefined;
  @Input() name : string = "";
  @Input() id : string = "";
  @Input() img : string = "";
  @Output() ExtraEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickPlus(){
    let cantidadActual = (<HTMLInputElement>document.getElementById("cantidad"+this.id)).value;
    let cantidad = parseInt(cantidadActual);
    if (cantidad <= 7){
      (<HTMLInputElement>document.getElementById("cantidad"+this.id)).value = ""+(cantidad+1);
      this.ExtraEvent.emit(this.id+(cantidad+1));
    }
  }

  clickMinus(){
    let cantidadActual = (<HTMLInputElement>document.getElementById("cantidad"+this.id)).value;
    let cantidad = parseInt(cantidadActual);
    if (cantidad >= 1){
      (<HTMLInputElement>document.getElementById("cantidad"+this.id)).value = ""+(cantidad-1);
      this.ExtraEvent.emit(this.id+(cantidad-1));
    }
  }
}
