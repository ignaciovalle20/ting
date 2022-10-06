import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras-list',
  templateUrl: './extras-list.component.html',
  styleUrls: ['./extras-list.component.scss']
})
export class ExtrasListComponent implements OnInit {

  snacks = [
    {"nombre": "Coca Cola", "precio": "$50"},
    {"nombre": "Pop", "precio": "$50"},
    {"nombre": "Helado", "precio": "$20"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
