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
  quantity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickPlus(){
    if (this.quantity <= 7){
      this.quantity = this.quantity + 1;
      this.ExtraEvent.emit(this.id+this.quantity);
    }
  }

  clickMinus(){
    if (this.quantity >= 1){
      this.quantity = this.quantity - 1;
      this.ExtraEvent.emit(this.id+this.quantity);
    }
  }
}
