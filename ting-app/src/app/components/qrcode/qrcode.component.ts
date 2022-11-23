import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Seats } from 'src/app/interfaces/seats';
import { Extra } from 'src/app/interfaces/extra';
import { ExhibitionService } from 'src/app/services/exhibition.service';
import { SelectedExtras } from 'src/app/interfaces/selectedExtras';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  constructor(private cartService: CartService, private exhibitionService : ExhibitionService, private activeRoute: ActivatedRoute, private purchasesService: PurchasesService) { }

  qrcode: string = "";
  width = 250;
  qrloaded: boolean = false;
  params?: string;

  //Datos del carrito
  movie : string = "";
  theater : string = "";
  date : string = "";
  time : string = "";
  total : number = 0;
  seats : Seats[] = [];
  seatsString: string[] = [];
  extras : SelectedExtras[] = [];
  extrasString : string[] = [];
  exhibition : string = "";

  btnLabel?: string;
  ngOnInit(): void {

    this.params = this.activeRoute.snapshot.params['qrcode'];
    // SI llega un parametro, es porque viene de la pantalla del Historial de compras
    if (this.params !== undefined) {
      this.qrcode = this.params!.toString();
      this.qrloaded = true;
      this.btnLabel = "Volver";
    }
    else {
      this.cartService.getCart().subscribe(async (cart) => {
        const movie = await cart[0].movie;
        const theater = await cart[0].theater;
        const date = await cart[0].date;
        const time = await cart[0].time;
        const exhibition = await cart[0].exhibition;
        const seats = await cart[0].seats;
        const extras = await cart[0].selectedExtras;
        const total = await cart[0].total;
        this.qrcode = await cart[0].qrcode.toString();
        if (this.qrcode?.length != 0) {
          this.qrloaded = true;
        }

        this.movie = movie;
        this.theater = theater;
        this.date = date;
        this.time = time;
        this.exhibition = exhibition;
        this.seats = seats;
        this.extras = extras;
        this.total = total;
        if (this.seats !== null) {
          this.seatsToString(this.seats);
          this.extrasToString(this.extras);
          this.btnLabel = "Finalizar";
          this.exhibitionService.putSeats(this.exhibition, this.seats).subscribe();
          this.purchasesService.addPurchase(this.qrcode!,this.movie,this.theater,this.date,this.time,this.total,this.seatsString,this.extrasString).subscribe(() => { });
          this.cartService.clearCart().subscribe(() => {});
        }else{
          this.btnLabel = "Ir a mis compras";
        }
      });
    }
  }

  seatsToString(seats: Seats[]){
    seats.forEach(seat => {
      var seatString = "Fila: " + seat.row + " Asiento: " + seat.seat;
      this.seatsString.push(seatString);
    });
  }

  extrasToString(extrass: SelectedExtras[]){
    extrass.forEach(extra => {
      var extraString = extra.name + " x" + extra.quantity;
      this.extrasString.push(extraString);
    });
  }
}