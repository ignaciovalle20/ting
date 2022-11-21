import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Extra } from 'src/app/interfaces/extra';
import { CartService } from 'src/app/services/cart.service';
import { ExtrasService } from 'src/app/services/extras.service';
import { SelectedExtras } from 'src/app/interfaces/selectedExtras';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {
  
  extras: Extra[] = [];
  Seleccionados = new Map();
  selectedExtras: SelectedExtras[] = [];
  
  movieUrlWide: string = "";
  movieUrlMobile: string = "";
  
  constructor(private route: Router, private extrasService: ExtrasService,
     private cartService: CartService, private movieService: MovieService) { }


  @ViewChild('extrasList') extrasList!: any;

  ngOnInit(): void {
    this.extrasService.getExtras()
      .subscribe(extras => {
        this.extras = extras;
        console.log("this Extra", this.extras)
      });

      this.cartService.getCart().subscribe(async (cart) => {
        const movie = await cart[0].movie;

      this.movieService.getMovieImageWide(movie).subscribe((res) => {
        this.movieUrlWide = res;
        console.log("Movie URL: " + this.movieUrlWide);
      });
  
      this.movieService.getMovieImageMobile(movie).subscribe((res) => {
        this.movieUrlMobile = res;
        console.log("Movie URL: " + this.movieUrlMobile);
      });
  
      });
  }

  extrasNext(){
    this.extras.forEach((extraA) => {
      if (this.Seleccionados.has(extraA.id)){
        var id = extraA.id;
        var name = extraA.name;
        var price = extraA.price;
        var quantity = this.Seleccionados.get(extraA.id);
        var selec : SelectedExtras = {id, name, price, quantity};
        this.selectedExtras.push(selec);
      }
    });
    this.cart.setExtras(this.selectedExtras).subscribe((res) => {});
    this.route.navigate(['/summary']);
  }

  getCompras(compras: any){
    this.Seleccionados = compras;
    console.log(this.Seleccionados);
  }

}
