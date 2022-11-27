import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Location } from '@angular/common';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-processing-payment',
  templateUrl: './processing-payment.component.html',
  styleUrls: ['./processing-payment.component.scss']
})
export class ProcessingPaymentComponent implements OnInit {

  constructor(private router: Router, private purchasesService: PurchasesService, private _location: Location, private toastr: ToastrService) { }

  sleep: number = 0;
  approved: boolean = false;

  ngOnInit(): void {
    this.purchasesService.payment().subscribe((payment) => {
      this.sleep = payment.time;
      this.approved = payment.approved;
      setTimeout(() => {
        if (this.approved) {
          this.router.navigate(['qrcode']);
        } else {
          this.toastr.error("Error al procesar el Pago")
            .onHidden.subscribe(() => {
              this._location.back();
            });


        }

      }, this.sleep);

    });
  }

}
