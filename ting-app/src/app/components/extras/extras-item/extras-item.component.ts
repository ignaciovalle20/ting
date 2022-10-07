import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extras-item',
  templateUrl: './extras-item.component.html',
  styleUrls: ['./extras-item.component.scss']
})
export class ExtrasItemComponent implements OnInit {

  @Input() precioO : number | undefined;
  @Input() nombreE : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
