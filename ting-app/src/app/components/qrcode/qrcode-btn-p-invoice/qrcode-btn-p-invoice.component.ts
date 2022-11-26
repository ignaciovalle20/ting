import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { image } from './image.const';

@Component({
  selector: 'app-qrcode-btn-p-invoice',
  templateUrl: './qrcode-btn-p-invoice.component.html',
  styleUrls: ['./qrcode-btn-p-invoice.component.scss']
})
export class QrcodeBtnPInvoiceComponent implements OnInit {

  pdf?: any | undefined;

  @Input() cart!: Cart;

  constructor() { }

  //Read image file from assets folder and convert to base64 string





    /////////////////
  ngOnInit(): void {
    this.pdf = {
      content: [
        {
          text: 'Factura de compra',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: '#262b4f',
          style: 'sectionHeader'
        },
       {
          image: "logo",
          width: 100,
          alignment: 'center',
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: 'DATA1',
                bold: true
              },
              { text: 'this.invoice.address' },
              { text: 'this.invoice.email' },
              { text: 'this.invoice.contactNo' }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Resumen de Compra',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Product', 'Price', 'Quantity', 'Amount']
              /*       ...this.invoice.products.map(p => ([p.name, p.price, p.qty, (p.price*p.qty).toFixed(2)])),
          [{text: 'Total Amount', colSpan: 3}, {}, {}, this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2)] */
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          text: 'this.invoice.additionalDetails',
          margin: [0, 0, 0, 15]
        },
        {
          columns: [
            [{ qr: `UFT43HB`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Order can be return in max 10 days.',
            'Warrenty of the product will be subject to the manufacturer terms and conditions.',
            'This is system generated invoice.',
          ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      },
      images: {
         // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
        //logo: 'https://picsum.photos/seed/picsum/200/300',
        logo: 'https://ting-app-s3.s3.us-east-2.amazonaws.com/images/TiNG-PDF.png'
        // is supported loading images via url with custom headers (minimal version: 0.2.5)
 /*        strawberries: {
          url: 'https://picsum.photos/id/1080/367/267',
          headers: {
            myheader: '123',
            myotherheader: 'abc',
          }
        } */
      }
    };
  }



  generatePDF() {
    console.log("generatePDF", this.pdf);
    pdfMake.createPdf(this.pdf).open();
  }


}