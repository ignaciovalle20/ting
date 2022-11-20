import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases-item',
  templateUrl: './purchases-item.component.html',
  styleUrls: ['./purchases-item.component.scss']
})
export class PurchasesItemComponent implements OnInit {

  @Input() date : string | undefined;
  
  @Input() movie: string | undefined;

  @Input() qrcode: string | undefined;
  @Input() time: string | undefined;
  @Input() theater: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
