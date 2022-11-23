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
  seatsString : string = "";
  extras : string[] = [];
  extrasString : string = "";
  purchaseDate : string = "";
  image : string = "";
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
      this.image = await this.fetchImage("https://i.imgur.com/HzfiCl0.png")
      this.toString();
      this.createPdf();
    });
    
  }

  toString(){
    this.extrasString = this.extras.join(", ");
    this.seatsString = this.seats.join(", ");
  }

  createPdf() {
    const documentDefinition : any = { 
      footer: {
        columns: [
          { text: 'ting.uy', alignment: 'left', margin: [ 20, 10, 0, 0 ]},
          {
            image: this.image,
            width: 40,
            alignment: 'right',
            margin: [0, 0, 10, 0]
          }
        ]
      },
      content: [
        // IMAGEN TING
        {
          image: this.image,
          width: 150,
          alignment: 'center',
          margin: [0, 1, 0, 40]
        },
        
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
        {
          style: 'tableExample',
          margin: [0, 40, 0, 0],
          table: {
            widths: ['*'],
            headerRows: 1,
            body: [
              [{text: 'INFORMACIÓN DEL TICKET:', style: 'tableHeader', bold: true, fontSize: 20, alignment: 'center'}],
              [{
                text: ['Pelicula: ',  {text:this.movie, bold: false}],
                bold: true
              }],
              [{
                text: ['Cine: ',  {text:this.theater, bold: false}],
                bold: true
              }],
              [{
                text: ['Fecha: ',  {text:this.date, bold: false}],
                bold: true
              }],
              [{
                text: ['Hora: ',  {text:this.time, bold: false}],
                bold: true
              }],
              [{
                text: ['Asientos: ',  {text:this.seatsString, bold: false}],
                bold: true
              }],
              [{
                text: ['Snacks: ',  {text:this.extrasString, bold: false}],
                bold: true
              }],
              [{
                text: ['Total: ',  { text: "$" + this.total, bold: false}],
                bold: true
              }],
              [{
                text: ['Fecha de compra: ',  {text:this.purchaseDate, bold: false}],
                bold: true
              }],
            ]
          },
          layout: 'lightHorizontalLines'
        },
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
    //pdfMake.createPdf(documentDefinition).download(this.movie + "_" + this.date + ".pdf");
    //pdfMake.createPdf(documentDefinition).print();
    this.location.back();
  }


  ///////////////////////
  ////    IMAGEN     ////
  ///////////////////////
  fetchImage(url : string) {
    return fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise<any>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );
  }

}
