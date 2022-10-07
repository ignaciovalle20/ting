import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-finder-date-selector',
  templateUrl: './movie-finder-date-selector.component.html',
  styleUrls: ['./movie-finder-date-selector.component.scss']
})
export class MovieFinderDateSelectorComponent implements OnInit {

  
  
  constructor() { }

  ngOnInit(): void {
    let dateControl = (<HTMLInputElement>document.getElementById("fecha"));
    let hoy = new Date().toISOString().slice(0, 10)
    dateControl.value = hoy;
    dateControl.min = hoy;
  }

  

}
