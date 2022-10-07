import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Funciones } from 'src/app/interfaces/funciones';

@Component({
  selector: 'app-seats-grid',
  templateUrl: './seats-grid.component.html',
  styleUrls: ['./seats-grid.component.scss']
})
export class SeatsGridComponent implements OnInit {
  /*
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
  */
  fila1 = [0,1,2,3,4,5]
  fila2 = [6,7,8,9,10,11]
  fila3 = [12,13,14,15,16,17]
  fila4 = [18,19,20,21,22,23]

  seleccionados: string[] = [];

  asientos: Funciones[] = [];

  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {
    this.funcionesService.getFunciones()
      .subscribe((asientos: Funciones[]) => {
        this.asientos = asientos;
      });
  }

  checkboxClick(event: Event){
    let isChecked = (<HTMLInputElement>event.target).checked;
    if (isChecked) {
      this.seleccionados.push((<HTMLInputElement>event.target).id);
      (<HTMLInputElement>document.getElementById("selec")).innerHTML= this.seleccionados.toString();
    } else {
      let index = this.seleccionados.indexOf((<HTMLInputElement>event.target).id);
      this.seleccionados.splice(index, 1);
      (<HTMLInputElement>document.getElementById("selec")).innerHTML= this.seleccionados.toString();
    }
  }
}
