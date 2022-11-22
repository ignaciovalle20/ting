import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-purchases-btn-return',
  templateUrl: './purchases-btn-return.component.html',
  styleUrls: ['./purchases-btn-return.component.scss']
})

export class PurchasesBtnReturnComponent implements OnInit {

  @Output() SummaryNext = new EventEmitter<MouseEvent>();
  
  constructor(private location: Location)  { }

  ngOnInit(): void {}

  goBack(){
    this.location.back();
  }
}
