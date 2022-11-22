import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Location } from '@angular/common';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  constructor(private cartService: CartService, private activeRoute: ActivatedRoute, private purchasesService: PurchasesService) { }

  qrcode?: string;
  width = 200;
  /*   qrInfo: string = "";
   */
  qrloaded: boolean = false;
  params?: string;
  btnLabel?: string;

  cart!: Cart[];
  ngOnInit(): void {

    this.params = this.activeRoute.snapshot.params['qrcodeID'];
    // SI llega un parametro, es porque viene de la pantalla del Historial de compras
    if (this.params != undefined) {
      this.qrcode = this.params!.toString();
      this.qrloaded = true;
      this.btnLabel = "Volver";
    }
    else {

      this.cartService.getCart().subscribe(async (cart) => {
        this.cart = cart;
        this.qrcode = await cart[0].qrcode.toString();
        if (this.qrcode?.length != 0) {
          this.qrloaded = true;
        }
        this.btnLabel = "Finalizar";
        this.purchasesService.addPurchase(cart[0]).subscribe(() => { });
        this.cartService.clearCart().subscribe(() => {});
      });
    }
  }
}