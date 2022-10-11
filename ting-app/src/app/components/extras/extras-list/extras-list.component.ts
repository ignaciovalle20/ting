import { Component, OnInit } from '@angular/core';
import { Extra } from '../../../interfaces/extras';
import { ExtrasService } from '../../../services/extras.service';

@Component({
  selector: 'app-extras-list',
  templateUrl: './extras-list.component.html',
  styleUrls: ['./extras-list.component.scss']
})
export class ExtrasListComponent implements OnInit {
String(arg0: string) {
  throw new Error('Method not implemented.');
  }
  extras: Extra[] = [];
  compras: String[] = [];

  constructor(private extrasService: ExtrasService) { }

  ngOnInit(): void {
    this.extrasService.getExtras()
      .subscribe(extras => {
        this.extras = extras;
      });
  }

  items(item : String){
    let id = item.slice(0,1);
    let quantity = item.slice(2,3);
    this.compras.forEach((element,index)=> {
      let idElem = element.slice(0,1);
      if (id === idElem){
        this.compras.splice(index,1);
      }
    });
    if(quantity !== "0"){
      this.compras.push(item);
    }
    (<HTMLInputElement>document.getElementById("selec")).innerHTML = this.compras.toString();
  }
}
