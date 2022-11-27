import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Purchases } from 'src/app/interfaces/purchases';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})

export class PurchasesComponent implements OnInit {

  purchases: Purchases[] = [];

  constructor(private purchasesService: PurchasesService) { }

  ngOnInit(): void {
    this.purchasesService.getPurchases().subscribe((purchases) => {
      this.purchases = purchases;
    });
  }
}
