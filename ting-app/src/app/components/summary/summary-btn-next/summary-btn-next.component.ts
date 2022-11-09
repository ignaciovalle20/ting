import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-btn-next',
  templateUrl: './summary-btn-next.component.html',
  styleUrls: ['./summary-btn-next.component.scss']
})
export class SummaryBtnNextComponent implements OnInit {


  @Output() SummaryNext = new EventEmitter<MouseEvent>();

  constructor() { }


  ngOnInit(): void {
  }

  summaryNext(event: MouseEvent) {
    this.SummaryNext.emit(event);
  }
}
