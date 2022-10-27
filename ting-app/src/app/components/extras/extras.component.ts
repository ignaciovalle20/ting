import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Extra } from 'src/app/interfaces/extras';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { ExtrasService } from 'src/app/services/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {
  
  extras: Extra[] = [];
  Seleccionados = new Map();
  
  ///
  constructor(private route: Router, private dataSharing: DataSharingService, private extrasService: ExtrasService) { }

  @ViewChild('extrasList') extrasList!: any;

  ngOnInit(): void {
    this.extrasService.getExtras()
      .subscribe(extras => {
        this.extras = extras;
      });
  }

  extrasNext(){
    this.Seleccionados.forEach((value: any, key: any) => {
      
    });
    this.route.navigate(['/summary']);
  }

  getCompras(compras: any){
    this.Seleccionados = compras;
    console.log(this.Seleccionados);
  }

}
