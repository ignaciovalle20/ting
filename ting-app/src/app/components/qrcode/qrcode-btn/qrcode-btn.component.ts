import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-qrcode-btn',
  templateUrl: './qrcode-btn.component.html',
  styleUrls: ['./qrcode-btn.component.scss']
})
export class QrcodeBtnComponent implements OnInit {

  @Input() btnLabel!: string;

  constructor(private route: Router, private location: Location) { }

  ngOnInit(): void {
    
  }

  goTo(): void {
    if(this.btnLabel == 'Finalizar' || this.btnLabel == 'Ir a mis compras') {
      this.route.navigate(['/purchases']);
    }
    else{
      this.location.back();
    }
  }
}
