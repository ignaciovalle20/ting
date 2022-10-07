import { Component, OnInit } from '@angular/core';
import { Funciones } from 'src/app/interfaces/funciones';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  funciones: Funciones[] = [];

  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {
    this.funcionesService.getHorarios("Batman","Tres Cruces","2022-10-07").subscribe((funcion: Funciones[]) => {
      this.funciones = funcion;
    }); 
  }
}
