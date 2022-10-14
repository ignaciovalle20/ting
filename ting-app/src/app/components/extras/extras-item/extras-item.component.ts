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
  @Output() ExtraEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  click(value : any, name : string){
    let total = name + " x" + value.value;
    this.ExtraEvent.emit(total);
  }
}
