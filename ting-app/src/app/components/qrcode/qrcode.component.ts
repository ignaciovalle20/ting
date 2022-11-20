import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Location } from '@angular/common';
import { PurchasesService } from 'src/app/services/purchases.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  constructor(private cartService: CartService, private activeRoute: ActivatedRoute, private purchasesService: PurchasesService) { }

  qrcode?: string;
  width = 250;
  qrInfo: string = "";
  qrloaded: boolean = false;
  params?: string;

  btnLabel?: string;
  ngOnInit(): void {

    this.params = this.activeRoute.snapshot.params['qrcodeID'];
    // SI llega un parametro, es porque viene de la pantalla del Historial de compras
    if (this.params != undefined) {
      this.qrInfo = JSON.stringify(this.params!);
      this.qrcode = this.params!.toString();
      this.qrloaded = true;
      this.btnLabel = "Volver";
    }
    else {   

      this.cartService.getCart().subscribe(async (cart) => {
        this.qrcode = await cart[0].qrcode.toString();
        this.qrInfo = JSON.stringify(this.qrcode!);
        if (this.qrcode?.length != 0) {
          this.qrloaded = true;
        }
        this.btnLabel = "Finalizar";
        console.log("QR", this.qrcode?.toString());
        console.log("QR JSON", JSON.stringify(this.qrcode!));
        //Agregamos a las compras realizadas
        this.purchasesService.addPurchase(cart).subscribe(() => { });
      });
    }
  }
}

