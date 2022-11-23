import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode-btn-ticket',
  templateUrl: './qrcode-btn-ticket.component.html',
  styleUrls: ['./qrcode-btn-ticket.component.scss']
})
export class QrcodeBtnTicketComponent implements OnInit {

  @Input() qrcode: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
