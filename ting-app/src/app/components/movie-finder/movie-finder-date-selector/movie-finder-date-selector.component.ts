import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-movie-finder-date-selector',
  templateUrl: './movie-finder-date-selector.component.html',
  styleUrls: ['./movie-finder-date-selector.component.scss']
})
export class MovieFinderDateSelectorComponent implements OnInit {

  
  isDisabled: boolean = true;

  selectedDate?: string;
  today= new Date().toISOString().slice(0, 10)
  constructor() {
  }
  
  ngOnInit(): void {

  }

  showDate() {
    this.isDisabled = false;
  }
  selectedDateFunction() {
    return this.selectedDate;
  }
}
