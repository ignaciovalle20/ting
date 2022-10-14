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
    let name = item.replace(" x", "");
    name = name.slice(0, -1);
    let quantity = item.substring(item.length - 1);
    this.compras.forEach((element,index)=> {
      let name2 = element.replace(" x", "");
      name2 = name2.slice(0, -1);
      if (name === name2){
        this.compras.splice(index,1);
      }
    });
    if(quantity !== "0"){
      this.compras.push(item);
    }
    (<HTMLInputElement>document.getElementById("selec")).innerHTML = this.compras.toString();
  }
}
