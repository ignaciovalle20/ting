import { Component, OnInit } from '@angular/core';
import { Funciones } from 'src/app/interfaces/funciones';
import { FuncionesService } from 'src/app/services/funciones.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-movie-scheduler',
  templateUrl: './movie-scheduler.component.html',
  styleUrls: ['./movie-scheduler.component.scss']
})
export class MovieSchedComponent implements OnInit {

  funciones: Funciones[] = [];

  movie: string = ""; 
  theater: string ="";
  date: string = "";

  constructor(private funcionesService: FuncionesService, private route: Router, private activeRoute: ActivatedRoute, private dataSharing: DataSharingService) { }


  ngOnInit(): void {
    this.dataSharing.selectedMovie$.subscribe((value) => {
      this.movie = value;
    });
    this.dataSharing.selectedTheater$.subscribe((value) => {
      this.theater = value;
    });
    this.dataSharing.selectedDate$.subscribe((value) => {
      this.date = value;
    });
    
    this.funcionesService.getSchedule(this.movie, this.theater, this.date).subscribe((schedule: any) => {
      this.funciones = schedule;
    });
    }

    goNext() {
      console.log("goNext");
      this.route.navigate(['/snacks']);
    }
}

