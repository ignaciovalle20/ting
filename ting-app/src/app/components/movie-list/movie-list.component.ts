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
  pelicula = "Batman";
  cine = "Tres Cruces";
  fecha = "2022-10-31"

  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {
    this.funcionesService.getHorarios(this.pelicula,this.cine,"2022-10-31").subscribe((funcion: Funciones[]) => {
      this.funciones = funcion;
    }); 
  }
}
