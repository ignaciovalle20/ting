import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedExtras } from 'src/app/interfaces/selectedExtras';
import { CartService } from 'src/app/services/cart.service';
import { Extra } from '../../../interfaces/extra';

@Component({
  selector: 'app-extras-list',
  templateUrl: './extras-list.component.html',
  styleUrls: ['./extras-list.component.scss']
})

export class ExtrasListComponent implements OnInit {
string(arg0: string) {
  throw new Error('Method not implemented.');
  }

  @Input() extras : Extra[] = [];
  @Output() ExtraEvent = new EventEmitter<any>();
  selectedExtras = new Map();
  preSelectedExtras = new Map();
  selectedExtrasFromCart : SelectedExtras[] = [];

  constructor(private cart : CartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe(async (cart) => {
      const extras = await cart[0].selectedExtras;
      this.selectedExtrasFromCart = extras;
      this.selectedExtrasFromCart.forEach(extra => {
        this.preSelectedExtras.set(extra.id, extra.quantity);
        this.selectedExtras.set(extra.id, extra.quantity);
      });
    });
  }

  addItem(item: string) {
    let SelectedID = item.substring(0,1);
    let SelectedQuantity = item.substring(1);
    if (SelectedQuantity === "0"){
      this.selectedExtras.delete(SelectedID);
    }
    else{
      this.selectedExtras.set(SelectedID, SelectedQuantity);
    }
    this.ExtraEvent.emit(this.selectedExtras);
  }
}
