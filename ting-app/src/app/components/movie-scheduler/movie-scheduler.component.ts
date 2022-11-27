import { Component, OnInit } from '@angular/core';
import { Exhibition } from 'src/app/interfaces/exhibition';
import { ExhibitionService } from 'src/app/services/exhibition.service';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-movie-scheduler',
  templateUrl: './movie-scheduler.component.html',
  styleUrls: ['./movie-scheduler.component.scss']
})

export class MovieSchedComponent implements OnInit {

  exhibitions: Exhibition[] = [];
  movie: string = "";
  theater: string = "";
  date: string = "";
  movieUrlWide: string = "";
  movieUrlMobile: string = "";

  now = new Date();


  constructor(private exhibitionService: ExhibitionService, private movieService: MovieService, private route: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(async (cart: any) => {
      const today = this.now.toLocaleString().split(',')[0].replace(/\//g, "-")
      const movie = await cart[0].movie;
      const theater = await cart[0].theater;
      const date = await cart[0].date;
      const actualTime = this.convert2Digits(this.now.getHours()) + ":" + this.convert2Digits(this.now.getMinutes());
      this.movieService.getMovieImageWide(movie).subscribe((res: any) => {
        this.movieUrlWide = res[0].movieImg.urlWide;
      });

      this.movieService.getMovieImageMobile(movie).subscribe((res: any) => {
        this.movieUrlMobile = res[0].movieImg.url;
      });

      this.exhibitionService.getSchedule(movie!, theater!, date!).subscribe((schedule: any) => {
        if (date === today) {
          schedule.forEach((exhibition: any) => {
            if (exhibition.time > actualTime) {
              this.exhibitions.push(exhibition);
            }
          });

        } else {
          this.exhibitions = schedule;
        }

        this.movie = movie;
        this.theater = theater;
        this.date = date.replace(/-/g, "/");
      });
    });
  }

  convert2Digits(num: number) {
      return("0" + num).slice(-2);
  }
  goNext(exhibition: string, time: string, price: number) {
    this.cartService.setExhibition(exhibition).subscribe();
    this.cartService.setTime(time).subscribe();
    this.cartService.setPrice(price).subscribe();
    this.route.navigate(['/seats']);
  }

}

