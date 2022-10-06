import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsientosService {


  asientos = [
    {"asiento":"A1", "ocupado" : true},
    {"asiento":"A2", "ocupado" : false},
    {"asiento":"A3", "ocupado" : false},
    {"asiento":"A4", "ocupado" : false},
    {"asiento":"A5", "ocupado" : false},
    {"asiento":"A6", "ocupado" : true},
    {"asiento":"B1", "ocupado" : false},
    {"asiento":"B2", "ocupado" : false},
    {"asiento":"B3", "ocupado" : false},
    {"asiento":"B4", "ocupado" : true},
    {"asiento":"B5", "ocupado" : false},
    {"asiento":"B6", "ocupado" : false},
    {"asiento":"C1", "ocupado" : true},
    {"asiento":"C2", "ocupado" : false},
    {"asiento":"C3", "ocupado" : false},
    {"asiento":"C4", "ocupado" : false},
    {"asiento":"C5", "ocupado" : false},
    {"asiento":"C6", "ocupado" : false},
    {"asiento":"D1", "ocupado" : false},
    {"asiento":"D2", "ocupado" : true},
    {"asiento":"D3", "ocupado" : false},
    {"asiento":"D4", "ocupado" : false},
    {"asiento":"D5", "ocupado" : false},
    {"asiento":"D6", "ocupado" : false},
  ]

  constructor() { }

  public getSeats(){
    return this.asientos;
  }
}
