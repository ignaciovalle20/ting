import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PurchasesService } from 'src/app/services/purchases.service';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  params: string = "";
  qrcodee : string = "";
  movie : string = "";
  theater : string = "";
  date : string = "";
  time : string = "";
  total : number = 0;
  seats : string[] = [];
  extras : string[] = [];
  purchaseDate : string = "";

  constructor(private activeRoute: ActivatedRoute, private location : Location, private purchasesService : PurchasesService) { }

  ngOnInit(): void {
    this.params = this.activeRoute.snapshot.params['qrcode'];
    this.qrcodee = this.params.toString();
    this.purchasesService.getPurchasesQR(this.qrcodee).subscribe(async (purchase) => {
      const movie = await purchase[0].movie;
      const theater = await purchase[0].theater;
      const date = await purchase[0].date;
      const time = await purchase[0].time;
      const total = await purchase[0].total;
      const seats = await purchase[0].seats;
      const extras = await purchase[0].extras;
      const purchaseDate = await purchase[0].purchaseDate;

      this.movie = movie;
      this.theater = theater;
      this.date = date;
      this.time = time;
      this.total = total;
      this.seats = seats;
      this.extras = extras;
      this.purchaseDate = purchaseDate;
      this.createPdf();
    });
  }

  createPdf() {
    const documentDefinition : any = { 
      footer: {
        columns: [
          { text: 'ting.uy', alignment: 'left', margin: [ 20, 10, 0, 0 ]},
          /*
          {
            image: this.logo,
            width: 40,
            alignment: 'right',
            margin: [0, 0, 10, 0]
          }
          */
        ]
      },
      content: [
        // IMAGEN TING
        /*
        {
          image: this.logo,
          width: 150,
          alignment: 'center',
          margin: [0, 1, 0, 40]
        },
        */
        // QR TITLE
        {
          text: 'TU CÓDIGO QR:',
          style: 'header',
          alignment: 'center',
          margin: [0, 0, 10, 10]
        },
        // QR CODE
        { 
          qr : this.qrcodee,
          fit : 200,
          alignment : 'center'
        },
        // QR CODE STRING
        {
          text: this.qrcodee,
          alignment: 'center',
          margin: [0, 10, 0, 0],
          color: '#696969'
        },

        // INFO DEL TICKET
        {
          text: 'INFORMACIÓN DEL TICKET:',
          alignment: 'left',
          margin: [0, 30, 0, 0],
          bold: true,
          fontSize: 16
        },
        // MOVIE
        {
          text: ['Pelicula: ',  {text:this.movie, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // CINE
        {
          text: ['Cine: ',  {text:this.theater, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // DATE
        {
          text: ['Fecha: ',  {text:this.date, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // TIME
        {
          text: ['Hora: ',  {text:this.time, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // SEATS
        {
          text: ['Asientos: ',  {text:this.seats, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // EXTRAS
        {
          text: ['Extras: ',  {text:this.extras, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // TOTAL
        {
          text: ['Total: ',  {text:this.total, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
        // PURCHASEDATE
        {
          text: ['Purchase date: ',  {text:this.purchaseDate, bold: false}],
          alignment: 'left',
          margin: [0, 5, 0, 0],
          bold: true
        },
      ]
    };
    const pdf = pdfMake.createPdf(documentDefinition);
    pdf.open();
    this.location.back();
  }
}
