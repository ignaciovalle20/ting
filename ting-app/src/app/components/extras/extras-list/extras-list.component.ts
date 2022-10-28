import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Extra } from '../../../interfaces/extras';
import { ExtrasService } from '../../../services/extras.service';

@Component({
  selector: 'app-extras-list',
  templateUrl: './extras-list.component.html',
  styleUrls: ['./extras-list.component.scss']
})
export class ExtrasListComponent implements OnInit {
String(arg0: string) {
  throw new Error('Method not implemented.');
  }

  @Input() extras : Extra[] = [];
  @Output() ExtraEvent = new EventEmitter<any>();
  Seleccionados = new Map();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: string) {
    let SelecID = item.substring(0,1);
    let SelecQuantity = item.substring(1);
    if (SelecQuantity === "0"){
      this.Seleccionados.delete(SelecID);
    }
    else{
      this.Seleccionados.set(SelecID, SelecQuantity);
    }
    this.ExtraEvent.emit(this.Seleccionados);
  }

}
