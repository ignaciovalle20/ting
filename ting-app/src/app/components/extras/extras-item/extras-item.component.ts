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
  @Input() quantity : number = 0;

  @Output() ExtraEvent = new EventEmitter<any>();
  disablePlus:boolean = false;
  disableMinus:boolean = true;

  constructor() { }

  ngOnInit(): void {}

  clickPlus(){
    if (this.quantity <= 7){
      this.quantity = this.quantity + 1;
      this.disableMinus = false;
      this.disablePlus = false;
      this.ExtraEvent.emit(this.id+this.quantity);
      if (this.quantity === 8){
        this.disablePlus = true;
      }
    }
  }

  clickMinus(){
    if (this.quantity >= 1){
      this.quantity = this.quantity - 1;
      this.disablePlus = false;
      this.ExtraEvent.emit(this.id+this.quantity);
      if(this.quantity === 0){
        this.disableMinus = true;
      }
    }
  }
}
