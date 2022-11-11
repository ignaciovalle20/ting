import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Extra } from 'src/app/interfaces/extra';
import { ExtrasService } from 'src/app/services/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {
  
  extras: Extra[] = [];
  Seleccionados = new Map();
  
  constructor(private route: Router, private extrasService: ExtrasService) { }

  @ViewChild('extrasList') extrasList!: any;

  ngOnInit(): void {
    this.extrasService.getExtras()
      .subscribe(extras => {
        this.extras = extras;
      });
  }

  extrasNext(){
    this.extras.forEach((extra) => {
      if (this.Seleccionados.has(extra.id)){
       //Añadir al carrito 
      }
    });
    this.route.navigate(['/summary']);
  }

  getCompras(compras: any){
    this.Seleccionados = compras;
    console.log(this.Seleccionados);
  }

}
