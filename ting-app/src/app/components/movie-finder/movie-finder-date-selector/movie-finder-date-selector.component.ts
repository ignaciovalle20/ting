import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-movie-finder-date-selector',
  templateUrl: './movie-finder-date-selector.component.html',
  styleUrls: ['./movie-finder-date-selector.component.scss']
})
export class MovieFinderDateSelectorComponent implements OnInit {


  isDisabled: boolean = true;

  selectedDate?: string;
  today = new Date();
  constructor() {
  }

  ngOnInit(): void {

  }

  showDate() {
    this.isDisabled = false;
    this.selectedDate = moment(this.today).format("YYYY-MM-DD");
  }
  selectedDateFunction() {
    return this.selectedDate;
  }
}
