import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-processing-payment',
  templateUrl: './processing-payment.component.html',
  styleUrls: ['./processing-payment.component.scss']
})
export class ProcessingPaymentComponent implements OnInit {

  constructor(private router: Router, private purchasesService : PurchasesService, private _location : Location) { }

  sleep: number = 0;
  approved: boolean = false;
  
  ngOnInit(): void {
    this.purchasesService.payment().subscribe((payment) => {
      console.log(payment);
      this.sleep = payment.time;
      this.approved = payment.approved;
      console.log(this.sleep, this.approved);
      setTimeout(() => {
        if(this.approved){
          this.router.navigate(['qrcode']);
        }else{
          this._location.back();
        }
        
      }, this.sleep);  

    });
  } 

}
