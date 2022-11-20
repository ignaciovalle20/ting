import { Component, Input, OnInit } from '@angular/core';
import { Purchases } from 'src/app/interfaces/purchases';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {

  @Input() purchases : Purchases[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
