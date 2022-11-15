import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing-payment',
  templateUrl: './processing-payment.component.html',
  styleUrls: ['./processing-payment.component.scss']
})
export class ProcessingPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  sleep: number = Math.floor(Math.random() * 1800) + 1200;
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['qrcode']);
  }, this.sleep);  
  } 

}
