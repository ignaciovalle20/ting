import { Component, OnInit } from '@angular/core';
import { Funciones } from 'src/app/interfaces/funciones';
import { FuncionesService } from 'src/app/services/funciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-scheduler',
  templateUrl: './movie-scheduler.component.html',
  styleUrls: ['./movie-scheduler.component.scss']
})
export class MovieSchedComponent implements OnInit {

  funciones: Funciones[] = [];

  movie?: string; 

  theater?: string;
  date?: string;

  constructor(private funcionesService: FuncionesService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    /* this.route.snapshot.queryParamMap.get('movie'); */
    this.route.queryParams.subscribe(params => {
      this.funcionesService.getSchedule(params['movie'], params['theater'], params['date']).subscribe((schedule: any) => {
        this.funciones = schedule;
        this.movie = params['movie'];
        console.log("schedule", schedule);
        console.log("paramsMovie", params['movie']);
        console.log("paramsTheater", params['theater']);
        console.log("paramsDate", params['date']);
      });
    });
    console.log("this.movie", this.movie);
      /*   this.funcionesService.getSchedule("Batman","Tres Cruces","2022-10-07").subscribe((funcion: Funciones[]) => {
          this.funciones = funcion;
        });  */
    }
}

